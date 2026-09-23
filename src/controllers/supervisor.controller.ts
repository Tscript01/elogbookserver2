import type { Response, NextFunction } from 'express';
import { prisma } from '../config/prisma';
import type { AuthenticatedRequest } from '../middlewares/auth';
import { BadRequestError, ForbiddenError, NotFoundError } from '../utils/errors';

// 1. Get all students / trainees attached to this supervisor's email or ID
export async function getAssignedTrainees(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const supervisorId = req.user?.id;
    const supervisorEmail = req.user?.email;

    if (!supervisorId && !supervisorEmail) {
      throw new ForbiddenError('Supervisor authentication required');
    }

    const cleanEmail = supervisorEmail ? supervisorEmail.trim().toLowerCase() : '';

    const placements = await prisma.placement.findMany({
      where: {
        OR: [
          { ind_supervisor_id: supervisorId },
          { ind_supervisor_email: cleanEmail },
        ],
      },
      include: {
        student: {
          select: { id: true, name: true, email: true, matric_no: true, department: true },
        },
      },
      orderBy: { created_at: 'desc' },
    });

    const trainees = placements.map((p: { id: any; student_id: any; student: { name: any; email: any; matric_no: any; department: any; }; ind_supervisor_name: any; company_name: any; start_date: any; end_date: any; }) => ({
      placement_id: p.id,
      student_id: p.student_id,
      student_name: p.student?.name || p.ind_supervisor_name,
      email: p.student?.email,
      matric_no: p.student?.matric_no,
      department: p.student?.department || 'Computer Science',
      institution: 'Ekiti State University',
      company_name: p.company_name,
      start_date: p.start_date,
      end_date: p.end_date,
    }));

    res.status(200).json({
      status: 'success',
      data: { trainees },
    });
  } catch (error) {
    next(error);
  }
}
// 2. Get all weekly submissions and daily logs for a specific placement
export async function getTraineeSubmissions(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const { placementId } = req.params;
    const supervisorId = req.user?.id;

    if (!placementId) {
      throw new BadRequestError('Placement ID is required');
    }

    const placement = await prisma.placement.findUnique({
      where: { id: placementId },
    });

    if (!placement) {
      throw new NotFoundError('Placement record not found');
    }

    // Verify supervisor authorization
    if (
      placement.ind_supervisor_id !== supervisorId &&
      req.user?.role !== 'ADMIN' &&
      req.user?.role !== 'INST_COORDINATOR'
    ) {
      throw new ForbiddenError('You are not authorized to view submissions for this placement');
    }

    const submissions = await prisma.weeklySubmission.findMany({
      where: { placement_id: placementId },
      include: {
        daily_logs: {
          orderBy: { log_date: 'asc' },
        },
      },
      orderBy: { week_no: 'asc' },
    });

    res.status(200).json({
      status: 'success',
      data: { submissions },
    });
  } catch (error) {
    next(error);
  }
}

// 3. Centralized review queue across all assigned trainees
export async function getSupervisorReviewQueue(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const supervisorId = req.user?.id;
    const supervisorEmail = req.user?.email;

    const placements = await prisma.placement.findMany({
      where: {
        OR: [
          { ind_supervisor_id: supervisorId },
          { ind_supervisor_email: supervisorEmail ? supervisorEmail.trim().toLowerCase() : undefined },
        ],
      },
      select: { id: true },
    });

    const placementIds = placements.map((p: { id: any; }) => p.id);

    if (placementIds.length === 0) {
      res.status(200).json({ status: 'success', data: { submissions: [] } });
      return;
    }

    const submissions = await prisma.weeklySubmission.findMany({
      where: {
        placement_id: { in: placementIds },
      },
      include: {
        placement: {
          include: {
            student: { select: { name: true, matric_no: true } },
          },
        },
        daily_logs: {
          orderBy: { log_date: 'asc' },
        },
      },
      orderBy: { updated_at: 'desc' },
    });

    const formatted = submissions.map((sub: { placement: { student: { name: any; matric_no: any; }; }; }) => ({
      ...sub,
      student_name: sub.placement?.student?.name || 'Trainee',
      matric_no: sub.placement?.student?.matric_no,
    }));

    res.status(200).json({
      status: 'success',
      data: { submissions: formatted },
    });
  } catch (error) {
    next(error);
  }
}

// 4. Review & Endorse (Approve or Reject) a weekly submission
export async function reviewWeeklySubmission(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const { submissionId } = req.params;
    const { status, remarks } = req.body;
    const supervisorId = req.user?.id;

    if (!submissionId || !['APPROVED', 'REJECTED'].includes(status)) {
      throw new BadRequestError('Valid submission ID and review status (APPROVED or REJECTED) are required');
    }

    const submission = await prisma.weeklySubmission.findUnique({
      where: { id: submissionId },
      include: { placement: true },
    });

    if (!submission) {
      throw new NotFoundError('Weekly submission not found');
    }

    if (
      submission.placement.ind_supervisor_id !== supervisorId &&
      req.user?.role !== 'ADMIN' &&
      req.user?.role !== 'INST_COORDINATOR'
    ) {
      throw new ForbiddenError('You are not authorized to review this submission');
    }

    const updatedSubmission = await prisma.weeklySubmission.update({
      where: { id: submissionId },
      data: {
        status,
        supervisor_remarks: remarks ? remarks.trim() : null,
      },
      include: {
        daily_logs: true,
      },
    });

    res.status(200).json({
      status: 'success',
      message: `Weekly submission ${status.toLowerCase()} successfully`,
      data: { submission: updatedSubmission },
    });
  } catch (error) {
    next(error);
  }
}