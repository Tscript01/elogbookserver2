import type { Response, NextFunction } from 'express';
import { prisma } from '../config/prisma';
import type { AuthenticatedRequest } from '../middlewares/auth';
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

      // Calculate the current active week based on placement start date
      const placementStart = new Date(placement.start_date);
      const startDay = placementStart.getUTCDay();
      const startOffset = startDay === 0 ? -6 : 1 - startDay;
      const baseMonday = new Date(placementStart.getTime());
      baseMonday.setUTCDate(baseMonday.getUTCDate() + startOffset);
      baseMonday.setUTCHours(0, 0, 0, 0);

      const diffMs = now.getTime() - baseMonday.getTime();
      if (diffMs < 0) {
        throw new BadRequestError('Your placement has not started yet.');
      }

      const currentActiveWeek = Math.floor(diffMs / (7 * 24 * 60 * 60 * 1000)) + 1;

      // Allow logging only for the current active week
      if (Number(week_no) !== currentActiveWeek) {
        throw new ForbiddenError(
          `Logging window expired for week ${week_no}. You can only log activities for the current active week (Week ${currentActiveWeek}).`
        );
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


export const getStudentLogs = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      return res.status(401).json({ error: 'Unauthorized: No user ID found in token' });
    }

    const placement = await prisma.placement.findFirst({
      where: { student_id: userId }
    });

    if (!placement) {
      return res.status(404).json({ error: 'No active placement found for this student' });
    }

    const { week, month, year, page = '1', limit = '10' } = req.query;

    const whereClause: any = {
      placement_id: placement.id
    };

    if (week) {
      whereClause.week_no = Number(week);
    }

    if (month) {
      const selectedYear = year ? Number(year) : new Date().getFullYear();
      const selectedMonth = Number(month) - 1; // 0-indexed for JS Date

      const startOfMonth = new Date(Date.UTC(selectedYear, selectedMonth, 1));
      const endOfMonth = new Date(Date.UTC(selectedYear, selectedMonth + 1, 0, 23, 59, 59, 999));

      whereClause.log_date = {
        gte: startOfMonth,
        lte: endOfMonth
      };
    }

    const pageNum = Math.max(Number(page), 1);
    const take = Math.max(Number(limit), 1);
    const skip = (pageNum - 1) * take;

    const [total, logs] = await Promise.all([
      prisma.dailyLog.count({ where: whereClause }),
      prisma.dailyLog.findMany({
        where: whereClause,
        skip,
        take,
        orderBy: { log_date: 'desc' }
      })
    ]);

    const totalPages = Math.ceil(total / take);

    return res.status(200).json({
      pagination: {
        total,
        page: pageNum,
        limit: take,
        totalPages,
        hasNextPage: pageNum < totalPages,
        hasPrevPage: pageNum > 1
      },
      data: logs
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};