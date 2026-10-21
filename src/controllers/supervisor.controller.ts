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
          ...(supervisorId ? [{ ind_supervisor_id: supervisorId }] : []),
          ...(cleanEmail ? [{ ind_supervisor_email: cleanEmail }] : []),
        ],
      },
      include: {
        student: {
          select: { id: true, name: true, email: true, matric_no: true }, // Removed department here
        },
      },
      orderBy: { start_date: 'desc' },
    });

    const trainees = placements.map((p: { id: any; student_id: any; student: { name: any; email: any; matric_no: any; }; ind_supervisor_name: any; company_name: any; start_date: any; end_date: any; }) => ({
      placement_id: p.id,
      student_id: p.student_id,
      student_name: p.student?.name || p.ind_supervisor_name,
      email: p.student?.email,
      matric_no: p.student?.matric_no,
      department: 'Computer Science', // Fallback value since field isn't in User schema
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
    const cleanEmail = supervisorEmail ? supervisorEmail.trim().toLowerCase() : '';

    const placements = await prisma.placement.findMany({
      where: {
        OR: [
          ...(supervisorId ? [{ ind_supervisor_id: supervisorId }] : []),
          ...(cleanEmail ? [{ ind_supervisor_email: cleanEmail }] : []),
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
      orderBy: { week_no: 'desc' },
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
    
    if (!req.body) {
      throw new BadRequestError('Request body is missing');
    }

    const { status, remarks } = req.body;
    const supervisorId = req.user?.id;

    if (!submissionId || !status || !['APPROVED', 'REJECTED'].includes(status)) {
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
        reviewed_at: new Date(),
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


export async function setSupervisorCompanyLocation(
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

    const { latitude, longitude, radiusMeters, accuracy } = req.body;

    if (latitude === undefined || longitude === undefined) {
      throw new BadRequestError('Device GPS latitude and longitude are required');
    }

    const radius = radiusMeters ? Number(radiusMeters) : 200;

    // Optional signal check: prevent saving if device accuracy is too poor (> 500m)
    if (accuracy && Number(accuracy) > 500) {
      throw new BadRequestError(
        `GPS signal accuracy is too weak (±${Math.round(accuracy)}m). Step outdoors or near a window and try again.`
      );
    }

    // Update all placements associated with this supervisor's ID or email
    const updatedBatch = await prisma.placement.updateMany({
      where: {
        OR: [
          ...(supervisorId ? [{ ind_supervisor_id: supervisorId }] : []),
          ...(supervisorEmail ? [{ ind_supervisor_email: supervisorEmail }] : []),
        ],
      },
      data: {
        company_lat: Number(latitude),
        company_lng: Number(longitude),
        geofence_radius_m: radius,
        is_company_verified: true,
      },
    });

    res.status(200).json({
      status: 'success',
      message: `Official workplace location locked for ${updatedBatch.count} assigned placement(s).`,
      data: {
        company_lat: Number(latitude),
        company_lng: Number(longitude),
        geofence_radius_m: radius,
        is_company_verified: true,
        placements_updated: updatedBatch.count,
      },
    });
  } catch (error) {
    next(error);
  }
}

export async function getSupervisorCompanyLocation(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const supervisorId = req.user?.id;
    const supervisorEmail = req.user?.email;

    const placement = await prisma.placement.findFirst({
      where: {
        OR: [
          ...(supervisorId ? [{ ind_supervisor_id: supervisorId }] : []),
          ...(supervisorEmail ? [{ ind_supervisor_email: supervisorEmail }] : []),
        ],
      },
      select: {
        company_name: true,
        company_address: true,
        company_lat: true,
        company_lng: true,
        geofence_radius_m: true,
        is_company_verified: true,
      },
    });

    res.status(200).json({
      status: 'success',
      data: placement || null,
    });
  } catch (error) {
    next(error);
  }
}