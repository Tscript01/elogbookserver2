import { Response, NextFunction } from 'express';
import { prisma } from '../config/prisma';
import { AuthenticatedRequest } from '../middlewares/auth';

export const getStudentSubmissions = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      return res.status(401).json({ message: 'Unauthorized: Missing user token' });
    }

    const placement = await prisma.placement.findFirst({
      where: { student_id: userId }
    });

    if (!placement) {
      return res.status(404).json({ message: 'No active placement record found' });
    }

    let totalWeeks = 24;
    if (placement.start_date && placement.end_date) {
      const start = new Date(placement.start_date).getTime();
      const end = new Date(placement.end_date).getTime();

      if (!isNaN(start) && !isNaN(end) && end > start) {
        const diffDays = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
        totalWeeks = Math.max(Math.ceil(diffDays / 7), 1);
      }
    }

    const [submissions, allLogs] = await Promise.all([
      prisma.weeklySubmission.findMany({
        where: { placement_id: placement.id }
      }),
      prisma.dailyLog.findMany({
        where: { placement_id: placement.id },
        orderBy: { log_date: 'asc' }
      })
    ]);

    const submissionMap = new Map<number, (typeof submissions)[number]>();
    for (const s of submissions) {
      if (s && s.week_no != null) {
        submissionMap.set(Number(s.week_no), s);
      }
    }

    const weeks = Array.from({ length: totalWeeks }, (_, idx) => {
      const weekNo = idx + 1;
      const submission = submissionMap.get(weekNo);
      const weekLogs = (allLogs || []).filter((log: { week_no: any; }) => Number(log.week_no) === weekNo);

      return {
        id: submission?.id ?? null,
        placement_id: placement.id,
        week_no: weekNo,
        status: submission?.status ?? 'PENDING',
        supervisor_remarks: submission?.supervisor_remarks ?? null,
        submitted_at: submission?.submitted_at ?? null,
        daily_logs: weekLogs
      };
    });

    return res.status(200).json(weeks);
  } catch (error) {
    console.error('Error fetching submissions:', error);
    next(error);
  }
};

export const submitWeeklyLog = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      return res.status(401).json({ message: 'Unauthorized: Missing user token' });
    }

    const weekNo = Number(req.body.week_no);
    if (!weekNo || isNaN(weekNo) || weekNo < 1) {
      return res.status(400).json({ message: 'A valid positive week_no is required' });
    }

    const placement = await prisma.placement.findFirst({
      where: { student_id: userId }
    });

    if (!placement) {
      return res.status(404).json({ message: 'No active placement found for this student' });
    }

    const result = await prisma.$transaction(async (tx:any) => {
      const logsForWeek = await tx.dailyLog.findMany({
        where: {
          placement_id: placement.id,
          week_no: weekNo
        }
      });

      if (logsForWeek.length === 0) {
        throw new Error(`Cannot submit Week ${weekNo}: At least one daily activity entry is required.`);
      }

      const existingSubmission = await tx.weeklySubmission.findFirst({
        where: {
          placement_id: placement.id,
          week_no: weekNo
        }
      });

      if (existingSubmission && existingSubmission.status === 'APPROVED') {
        throw new Error(`Week ${weekNo} has already been approved and cannot be modified.`);
      }

      let submissionRecord;

      if (existingSubmission) {
        submissionRecord = await tx.weeklySubmission.update({
          where: { id: existingSubmission.id },
          data: {
            status: 'SUBMITTED',
            submitted_at: new Date()
          }
        });
      } else {
        submissionRecord = await tx.weeklySubmission.create({
          data: {
            placement_id: placement.id,
            week_no: weekNo,
            status: 'SUBMITTED',
            submitted_at: new Date()
          }
        });
      }

      await tx.dailyLog.updateMany({
        where: {
          placement_id: placement.id,
          week_no: weekNo
        },
        data: {
          weekly_submission_id: submissionRecord.id
        }
      });

      return submissionRecord;
    });

    return res.status(200).json({
      message: `Week ${weekNo} submitted successfully for review`,
      submission: result
    });
  } catch (error: any) {
    if (
      error.message?.includes('Cannot submit Week') ||
      error.message?.includes('already been approved')
    ) {
      return res.status(400).json({ message: error.message });
    }
    console.error('Error submitting weekly log:', error);
    next(error);
  }
};

export const getWeekSubmissionDetails = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      return res.status(401).json({ message: 'Unauthorized: Missing user token' });
    }

    const weekNo = Number(req.params.weekNo);
    if (!weekNo || isNaN(weekNo)) {
      return res.status(400).json({ message: 'Invalid week number parameter' });
    }

    const placement = await prisma.placement.findFirst({
      where: { student_id: userId }
    });

    if (!placement) {
      return res.status(404).json({ message: 'Placement record not found' });
    }

    const [submission, dailyLogs] = await Promise.all([
      prisma.weeklySubmission.findFirst({
        where: {
          placement_id: placement.id,
          week_no: weekNo
        }
      }),
      prisma.dailyLog.findMany({
        where: {
          placement_id: placement.id,
          week_no: weekNo
        },
        orderBy: { log_date: 'asc' }
      })
    ]);

    return res.status(200).json({
      week_no: weekNo,
      status: submission?.status || 'PENDING',
      supervisor_remarks: submission?.supervisor_remarks || null,
      submitted_at: submission?.submitted_at || null,
      daily_logs: dailyLogs
    });
  } catch (error) {
    console.error('Error fetching week submission details:', error);
    next(error);
  }
};