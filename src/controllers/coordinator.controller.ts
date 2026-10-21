import { Response, NextFunction } from 'express';
import crypto from 'crypto';
import { AuthenticatedRequest } from '../middlewares/auth';
import {prisma} from '../config/prisma';
import { ForbiddenError,BadRequestError } from '../utils/errors';

export async function getCoordinatorDashboard(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<Response | void> {
  try {
    const coordinatorId = req.user?.id;

    const placements = await prisma.placement.findMany({
      where: req.user?.role === 'ADMIN' ? {} : { inst_coordinator_id: coordinatorId },
      include: {
        student: { select: { id: true, name: true, email: true, matric_no: true } },
        ind_supervisor: { select: { id: true, name: true, email: true } },
        weekly_submissions: {
          select: { id: true, week_no: true, status: true },
        },
        clearance: true,
      },
      orderBy: { start_date: 'desc' },
    });

    const formatted = placements.map((p: { weekly_submissions: { length: any; filter: (arg0: (s: any) => boolean) => { (): any; new(): any; length: any; }; }; clearance: { coordinator_status: string; }; id: any; company_name: any; company_address: any; start_date: any; end_date: any; student: any; ind_supervisor: any; ind_supervisor_name: any; ind_supervisor_email: any; }) => {
      const totalWeeks = p.weekly_submissions.length;
      const approvedWeeks = p.weekly_submissions.filter((s: { status: string; }) => s.status === 'APPROVED').length;
      const isCleared = p.clearance?.coordinator_status === 'CLEARED';

      return {
        id: p.id,
        company_name: p.company_name,
        company_address: p.company_address,
        start_date: p.start_date,
        end_date: p.end_date,
        student: p.student,
        ind_supervisor: p.ind_supervisor || {
          name: p.ind_supervisor_name || 'Assigned Supervisor',
          email: p.ind_supervisor_email,
        },
        metrics: {
          total_weeks: totalWeeks,
          approved_weeks: approvedWeeks,
          is_ready_for_clearance: totalWeeks > 0 && approvedWeeks === totalWeeks,
          is_cleared: isCleared,
        },
        clearance: p.clearance,
      };
    });

    return res.status(200).json({
      status: 'success',
      data: {
        total_students: formatted.length,
        cleared_students: formatted.filter((p: { metrics: { is_cleared: any; }; }) => p.metrics.is_cleared).length,
        pending_evaluation: formatted.filter((p: { metrics: { is_ready_for_clearance: any; is_cleared: any; }; }) => p.metrics.is_ready_for_clearance && !p.metrics.is_cleared).length,
        students: formatted,
      },
    });
  } catch (error) {
    next(error);
  }
}

export async function getStudentLogbook(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<Response | void> {
  try {
    const { placementId } = req.params;

    const placement = await prisma.placement.findUnique({
      where: { id: placementId },
      include: {
        student: { select: { id: true, name: true, matric_no: true, email: true } },
        weekly_submissions: {
          include: { daily_logs: { orderBy: { log_date: 'asc' } } },
          orderBy: { week_no: 'asc' },
        },
        clearance: true,
      },
    });

    if (!placement) {
      return res.status(404).json({ status: 'error', message: 'Placement not found' });
    }

    return res.status(200).json({ status: 'success', data: placement });
  } catch (error) {
    next(error);
  }
}

export async function assessAndClearStudent(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<Response | void> {
  try {
    const { placementId } = req.params;
    const { score, remarks, signature_stamp } = req.body;

    if (score === undefined || score < 0 || score > 100) {
      return res.status(400).json({ status: 'error', message: 'Score must be between 0 and 100' });
    }

    if (!remarks || !remarks.trim()) {
      return res.status(400).json({ status: 'error', message: 'Evaluation remarks required' });
    }

    const placement = await prisma.placement.findUnique({
      where: { id: placementId },
      include: { weekly_submissions: true },
    });

    if (!placement) {
      return res.status(404).json({ status: 'error', message: 'Placement record not found' });
    }

    const hasPendingLogs = placement.weekly_submissions.some((s: { status: string; }) => s.status !== 'APPROVED');
    if (hasPendingLogs || placement.weekly_submissions.length === 0) {
      return res.status(400).json({
        status: 'error',
        message: 'All weekly logs must be approved by the industry supervisor first',
      });
    }

    const rawPayload = `${placement.student_id}-${score}-${Date.now()}`;
    const hash = crypto.createHash('sha256').update(rawPayload).digest('hex').substring(0, 16).toUpperCase();

    const clearance = await prisma.finalClearance.upsert({
      where: { placement_id: placementId },
      update: {
        coordinator_status: 'CLEARED',
        coordinator_score: Number(score),
        coordinator_remarks: remarks.trim(),
        coordinator_signature: signature_stamp || req.user?.name,
        coordinator_cleared_at: new Date(),
        final_pdf_hash: hash,
      },
      create: {
        placement_id: placementId,
        coordinator_status: 'CLEARED',
        coordinator_score: Number(score),
        coordinator_remarks: remarks.trim(),
        coordinator_signature: signature_stamp || req.user?.name,
        coordinator_cleared_at: new Date(),
        final_pdf_hash: hash,
      },
    });

    return res.status(200).json({
      status: 'success',
      message: 'Logbook endorsed and cleared for student download and ITF clearance',
      data: clearance,
    });
  } catch (error) {
    next(error);
  }
}

export async function getCoordinatorProfile(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<Response | void> {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user?.id },
      select: { id: true, name: true, email: true, department: true },
    });
    return res.status(200).json({ status: 'success', data: user });
  } catch (error) {
    next(error);
  }
}

export async function updateCoordinatorProfile(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<Response | void> {
  try {
    const { name, department } = req.body;
    const updated = await prisma.user.update({
      where: { id: req.user?.id },
      data: { name, department },
      select: { id: true, name: true, email: true, department: true },
    });
    return res.status(200).json({ status: 'success', data: updated });
  } catch (error) {
    next(error);
  }
}
export async function getAssignedStudentsAttendance(
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

    const placements = await prisma.placement.findMany({
      where: {
        OR: [
          ...(supervisorId ? [{ ind_supervisor_id: supervisorId }] : []),
          ...(supervisorEmail ? [{ ind_supervisor_email: supervisorEmail }] : []),
        ],
      },
      include: {
        student: {
          select: {
            id: true,
            name: true,
            matric_no: true,
            department: true,
            email: true,
          },
        },
        daily_attendance: {
          orderBy: { attendance_date: 'desc' },
        },
      },
      orderBy: { created_at: 'desc' },
    });

    const studentRecords = placements.map((placement: { daily_attendance: any; id: any; company_name: any; company_lat: any; company_lng: any; geofence_radius_m: any; student: any; }) => {
      const records = placement.daily_attendance;
      const totalDays = records.length;
      const verifiedOnSite = records.filter((r: { presence_status: string; }) => r.presence_status === 'VERIFIED_ON_SITE').length;
      const outOfBounds = records.filter((r: { presence_status: string; }) => r.presence_status === 'OUT_OF_BOUNDS').length;
      const spoofed = records.filter(
        (r: { presence_status: string; is_mocked: any; risk_score: number; }) => r.presence_status === 'HIGH_RISK_SPOOFED' || r.is_mocked || r.risk_score >= 70
      ).length;

      const attendanceRate = totalDays > 0 ? Math.round((verifiedOnSite / totalDays) * 100) : 0;

      return {
        placementId: placement.id,
        companyName: placement.company_name,
        companyLat: placement.company_lat,
        companyLng: placement.company_lng,
        geofenceRadiusM: placement.geofence_radius_m,
        student: placement.student,
        stats: {
          totalDays,
          verifiedOnSite,
          outOfBounds,
          spoofed,
          attendanceRate,
          hasFlags: spoofed > 0 || (totalDays >= 5 && attendanceRate < 60),
        },
        attendances: records,
      };
    });

    res.status(200).json({
      status: 'success',
      data: {
        students: studentRecords,
      },
    });
  } catch (error) {
    next(error);
  }
}


