import type { Response, NextFunction } from 'express';
import { prisma } from '../config/prisma';
import type { AuthenticatedRequest } from '../middlewares/auth';
import { BadRequestError, ForbiddenError, NotFoundError } from '../utils/errors';

const ONE_DAY_MS = 24 * 60 * 60 * 1000;
const ONE_WEEK_MS = 7 * ONE_DAY_MS;

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

    if (!week_no || !log_date || !description) {
      throw new BadRequestError('Week number, log date, and description are required');
    }

    const now = new Date();
    const logDate = new Date(log_date);

    if (isNaN(logDate.getTime())) {
      throw new BadRequestError('Invalid date format provided for log_date');
    }

    if (logDate.getTime() > now.getTime() + 5 * 60 * 1000) {
      throw new BadRequestError('Cannot submit daily logs for future dates');
    }

    const result = await prisma.$transaction(
      async (tx: any) => {
        const placement = await tx.placement.findFirst({
          where: { student_id: studentId },
        });

        if (!placement) {
          throw new NotFoundError('No placement found for the authenticated student');
        }

        const placementStart = new Date(placement.start_date);
        placementStart.setUTCHours(0, 0, 0, 0);

        const placementEnd = new Date(placement.end_date);
        placementEnd.setUTCHours(23, 59, 59, 999);

        // Verification 1: Placement period boundaries
        if (now.getTime() < placementStart.getTime()) {
          throw new BadRequestError(
            `Your placement commences on ${placementStart.toISOString().slice(0, 10)}. You cannot log activities before this date.`
          );
        }

        if (now.getTime() > placementEnd.getTime()) {
          throw new ForbiddenError(
            `Your placement period ended on ${placementEnd.toISOString().slice(0, 10)}. Log submissions are closed.`
          );
        }

        // Verification 2: Active week derived strictly from placement start date
        const elapsedPlacementMs = now.getTime() - placementStart.getTime();
        const currentActiveWeek = Math.floor(elapsedPlacementMs / ONE_WEEK_MS) + 1;

        if (Number(week_no) !== currentActiveWeek) {
          throw new ForbiddenError(
            `Logging window closed for week ${week_no}. You can only log activities for the current active week (Week ${currentActiveWeek}).`
          );
        }

        // Verification 3: Current week boundaries check
        const activeWeekStart = new Date(placementStart.getTime() + (currentActiveWeek - 1) * ONE_WEEK_MS);
        let activeWeekEnd = new Date(activeWeekStart.getTime() + ONE_WEEK_MS - 1);

        // Cap to placement termination date if final week is partial
        if (activeWeekEnd.getTime() > placementEnd.getTime()) {
          activeWeekEnd = placementEnd;
        }

        if (logDate.getTime() < activeWeekStart.getTime() || logDate.getTime() > activeWeekEnd.getTime()) {
          throw new BadRequestError(
            `The selected log date (${logDate.toISOString().slice(0, 10)}) does not fall within the current week cycle (Week ${currentActiveWeek}: ${activeWeekStart.toISOString().slice(0, 10)} to ${activeWeekEnd.toISOString().slice(0, 10)}).`
          );
        }

        // Verification 4: Weekly submission lock check
        let currentSubmission = await tx.weeklySubmission.findUnique({
          where: {
            placement_id_week_no: {
              placement_id: placement.id,
              week_no: Number(week_no),
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
              week_no: Number(week_no),
              status: 'PENDING',
            },
          });
        } else if (currentSubmission.status === 'REJECTED') {
          currentSubmission = await tx.weeklySubmission.update({
            where: { id: currentSubmission.id },
            data: { status: 'PENDING' },
          });
        }

        // Verification 5: Prevent duplicate entries on the same day
        const dayStart = new Date(logDate.getTime());
        dayStart.setUTCHours(0, 0, 0, 0);
        const dayEnd = new Date(logDate.getTime());
        dayEnd.setUTCHours(23, 59, 59, 999);

        const existingDailyLog = await tx.dailyLog.findFirst({
          where: {
            placement_id: placement.id,
            log_date: {
              gte: dayStart,
              lte: dayEnd,
            },
          },
        });

        if (existingDailyLog) {
          throw new BadRequestError(
            `A daily log entry already exists for ${logDate.toISOString().slice(0, 10)}. Please edit the existing entry.`
          );
        }

        const log = await tx.dailyLog.create({
          data: {
            placement_id: placement.id,
            week_no: Number(week_no),
            weekly_submission_id: currentSubmission.id,
            log_date: logDate,
            description: description.trim(),
            image_url: image_url || null,
          },
        });

        return log;
      },
      {
        maxWait: 5000,
        timeout: 10000,
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

    const isAuthorized =
      userRole === 'ADMIN' ||
      (userRole === 'STUDENT' && placement.student_id === userId) ||
      (userRole === 'IND_SUPERVISOR' && placement.ind_supervisor_id === userId) ||
      (userRole === 'INST_COORDINATOR' && placement.inst_coordinator_id === userId);

    if (!isAuthorized) {
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
      where: { student_id: userId },
    });

    if (!placement) {
      return res.status(404).json({ error: 'No active placement found for this student' });
    }

    const { week, month, year, page = '1', limit = '10' } = req.query;

    const whereClause: any = {
      placement_id: placement.id,
    };

    if (week) {
      whereClause.week_no = Number(week);
    }

    if (month) {
      const selectedYear = year ? Number(year) : new Date().getFullYear();
      const selectedMonth = Number(month) - 1;

      const startOfMonth = new Date(Date.UTC(selectedYear, selectedMonth, 1));
      const endOfMonth = new Date(Date.UTC(selectedYear, selectedMonth + 1, 0, 23, 59, 59, 999));

      whereClause.log_date = {
        gte: startOfMonth,
        lte: endOfMonth,
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
        orderBy: { log_date: 'desc' },
      }),
    ]);

    const totalPages = Math.ceil(total / take);

    return res.status(200).json({
      pagination: {
        total,
        page: pageNum,
        limit: take,
        totalPages,
        hasNextPage: pageNum < totalPages,
        hasPrevPage: pageNum > 1,
      },
      data: logs,
    });
  } catch (error) {
    console.error('Error fetching student logs:', error);
    next(error);
  }
};