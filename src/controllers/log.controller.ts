import type { Response, NextFunction } from 'express';
import { prisma } from '../config/prisma';
import type { AuthenticatedRequest } from '../middlewares/auth.js';
import { BadRequestError, ForbiddenError, NotFoundError } from '../utils/errors';

export async function createDailyLog(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const studentId = req.user?.id;
    if (!studentId) {
      throw new ForbiddenError('Student authentication required');
    }

    const { week_no, log_date, description, image_url } = req.body;

    const now = new Date();
    const logDate = new Date(log_date);

    if (logDate.getTime() > now.getTime() + 5 * 60 * 1000) {
      throw new BadRequestError('Cannot submit daily logs for future dates');
    }

    const fortyEightHoursAgo = now.getTime() - 48 * 60 * 60 * 1000;
    if (logDate.getTime() < fortyEightHoursAgo) {
      throw new BadRequestError('Anti-backfilling policy: Logs cannot be submitted more than 48 hours after the work date');
    }

    const result = await prisma.$transaction(async (tx: any) => {

      const placement = await tx.placement.findFirst({
        where: { student_id: studentId },
      });

      if (!placement) {
        throw new NotFoundError('No placement found for the authenticated student');
      }

      let currentSubmission = await tx.weeklySubmission.findUnique({
        where: {
          placement_id_week_no: {
            placement_id: placement.id,
            week_no,
          },
        },
      });

      if (currentSubmission && currentSubmission.status === 'APPROVED') {
        throw new ForbiddenError(
          `Cannot add logs for week ${week_no} because it has already been approved and locked`
        );
      }

      if (!currentSubmission || currentSubmission.status === null) {
        currentSubmission = await tx.weeklySubmission.create({
          data: {
            placement_id: placement.id,
            week_no,
            status: 'PENDING',
          },
        });
      } else if (currentSubmission.status === 'REJECTED') {
        currentSubmission = await tx.weeklySubmission.update({
          where: { id: currentSubmission.id },
          data: { status: 'PENDING' },
        });
      }

      const log = await tx.dailyLog.create({
        data: {
          placement_id: placement.id,
          week_no,
          weekly_submission_id: currentSubmission.id,
          log_date: logDate,
          description,
          image_url: image_url || null,
        },
        
      });

      return log;
      
    
    },
  {
    maxWait: 5000, // 5 seconds
    timeout: 10000, // 10 seconds
    isolationLevel: 'Serializable',
  }
  );

    res.status(201).json({
      status: 'success',
      data: { log: result },
    });
  } catch (error) {
    next(error);
  }
}

export async function getPlacementLogs(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const { placementId } = req.params;
    const userId = req.user?.id;
    const userRole = req.user?.role;

    if (!placementId || typeof placementId !== 'string' || !userId) {
      throw new BadRequestError('Missing or invalid placement ID');
    }

    const placement = await prisma.placement.findUnique({
      where: { id: placementId },
    });

    if (!placement) {
      throw new NotFoundError('Placement not found');
    }

    // RBAC verification: Only the student, their supervisor, or institution coordinator can view the logs
    if (
      userRole === 'STUDENT' && placement.student_id !== userId ||
      userRole === 'IND_SUPERVISOR' && placement.ind_supervisor_id !== userId ||
      userRole === 'INST_COORDINATOR' && placement.inst_coordinator_id !== userId
    ) {
      throw new ForbiddenError('You do not have permission to view logs for this placement');
    }

    const logs = await prisma.dailyLog.findMany({
      where: { placement_id: placementId },
      orderBy: { log_date: 'asc' },
    });

    res.status(200).json({
      status: 'success',
      data: { logs },
    });
  } catch (error) {
    next(error);
  }
}
