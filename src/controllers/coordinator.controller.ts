import { Response, NextFunction } from 'express';
import crypto from 'crypto';
import { AuthenticatedRequest} from "../middlewares/auth";

import {prisma} from "../config/prisma";
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
        student: {
          select: { id: true, name: true, email: true, matric_no: true },
        },
        ind_supervisor: {
          select: { id: true, name: true, email: true },
        },
        weekly_submissions: {
          select: { id: true, week_no: true, status: true },
        },
        clearance: true,
      },
      orderBy: { start_date: 'desc' },
    });

    const totalStudents = placements.length;
    let fullyApprovedCount = 0;
    let pendingClearanceCount = 0;

    const formattedPlacements = placements.map((p: { weekly_submissions: { length: any; filter: (arg0: (s: { status: string; }) => boolean) => { (): any; new(): any; length: any; }; }; clearance: { coordinator_status: string; }; id: any; company_name: any; company_address: any; start_date: any; end_date: any; student: any; ind_supervisor: any; ind_supervisor_name: any; ind_supervisor_email: any; }) => {
      const totalWeeks = p.weekly_submissions.length;
      const approvedWeeks = p.weekly_submissions.filter((s: { status: string; }) => s.status === 'APPROVED').length;
      const isCleared = p.clearance?.coordinator_status === 'CLEARED';

      if (isCleared) fullyApprovedCount++;
      else pendingClearanceCount++;

      return {
        placement_id: p.id,
        company_name: p.company_name,
        company_address: p.company_address,
        start_date: p.start_date,
        end_date: p.end_date,
        student: p.student,
        supervisor: p.ind_supervisor || {
          name: p.ind_supervisor_name || 'Assigned Supervisor',
          email: p.ind_supervisor_email,
        },
        clearance: p.clearance,
        metrics: {
          total_weeks: totalWeeks,
          approved_weeks: approvedWeeks,
          progress_percentage: totalWeeks > 0 ? Math.round((approvedWeeks / totalWeeks) * 100) : 0,
          is_cleared: isCleared,
        },
      };
    });

    return res.status(200).json({
      status: 'success',
      data: {
        stats: {
          total_students: totalStudents,
          fully_approved: fullyApprovedCount,
          pending_clearance: pendingClearanceCount,
        },
        placements: formattedPlacements,
      },
    });
  } catch (error) {
    next(error);
  }
}

interface RosterStudent {
  id: string;
  name: string | null;
  email: string | null;
  matric_no: string | null;
}

interface RosterSupervisor {
  id?: string;
  name: string | null;
  email: string | null;
}

interface RosterSubmission {
  id: string;
  status: string;
}

interface RosterClearance {
  coordinator_status: string;
}

interface RosterPlacement {
  id: string;
  company_name: string;
  company_address: string | null;
  ind_supervisor_email: string | null;
  start_date: Date;
  end_date: Date;
  student: RosterStudent;
  ind_supervisor: RosterSupervisor | null;
  ind_supervisor_name: string | null;
  weekly_submissions: RosterSubmission[];
  clearance: RosterClearance | null;
}

interface RosterEntry {
  id: string;
  company_name: string;
  company_address: string | null;
  supervisor_email: string | null;
  start_date: Date;
  end_date: Date;
  student: RosterStudent;
  supervisor: RosterSupervisor;
  approved_weeks_count: number;
  total_submissions: number;
  is_cleared: boolean;
}

export async function getTraineesRoster(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<Response | void> {
  try {
    const coordinatorId = req.user?.id;

    const placements = await prisma.placement.findMany({
      where: req.user?.role === 'ADMIN' ? {} : { inst_coordinator_id: coordinatorId },
      include: {
        student: {
          select: { id: true, name: true, email: true, matric_no: true },
        },
        ind_supervisor: {
          select: { id: true, name: true, email: true },
        },
        weekly_submissions: {
          select: { id: true, status: true },
        },
        clearance: true,
      },
      orderBy: { start_date: 'desc' },
    });

    const roster: RosterEntry[] = placements.map((p: RosterPlacement): RosterEntry => ({
      id: p.id,
      company_name: p.company_name,
      company_address: p.company_address,
      supervisor_email: p.ind_supervisor_email,
      start_date: p.start_date,
      end_date: p.end_date,
      student: p.student,
      supervisor: p.ind_supervisor || {
        name: p.ind_supervisor_name,
        email: p.ind_supervisor_email,
      },
      approved_weeks_count: p.weekly_submissions.filter((s) => s.status === 'APPROVED').length,
      total_submissions: p.weekly_submissions.length,
      is_cleared: p.clearance?.coordinator_status === 'CLEARED',
    }));

    return res.status(200).json({ status: 'success', data: roster });
  } catch (error) {
    next(error);
  }
}

export async function getClearanceCandidates(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<Response | void> {
  try {
    const coordinatorId = req.user?.id;

    const placements = await prisma.placement.findMany({
      where: req.user?.role === 'ADMIN' ? {} : { inst_coordinator_id: coordinatorId },
      include: {
        student: {
          select: { id: true, name: true, email: true, matric_no: true },
        },
        ind_supervisor: {
          select: { id: true, name: true, email: true },
        },
        weekly_submissions: true,
        clearance: true,
      },
    });

    const candidates = placements
      .filter((p: { weekly_submissions: { length: any; filter: (arg0: (s: { status: string; }) => boolean) => { (): any; new(): any; length: any; }; }; }) => {
        const total = p.weekly_submissions.length;
        const approved = p.weekly_submissions.filter((s: { status: string; }) => s.status === 'APPROVED').length;
        return total > 0 && approved === total;
      })
      .map((p: {
          ind_supervisor: { name: any; email: any; }; id: any; company_name: any; ind_supervisor_email: any; clearance: any; student: any; ind_supervisor_name: any; weekly_submissions: any; 
}) => ({
        placement_id: p.id,
        company_name: p.company_name,
        supervisor_email: p.ind_supervisor_email,
        verification_code: p.clearance?.final_pdf_hash,
        is_cleared: p.clearance?.coordinator_status === 'CLEARED',
        student: p.student,
        supervisor: p.ind_supervisor || {
          name: p.ind_supervisor_name,
          email: p.ind_supervisor_email,
        },
        total_weeks: p.weekly_submissions.length,
      }));

    return res.status(200).json({ status: 'success', data: candidates });
  } catch (error) {
    next(error);
  }
}

export async function issueInstitutionalClearance(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<Response | void> {
  try {
    const { placementId } = req.params;

    const placement = await prisma.placement.findUnique({
      where: { id: placementId },
      include: { weekly_submissions: true, clearance: true },
    });

    if (!placement) {
      return res.status(404).json({ status: 'error', message: 'Placement not found' });
    }

    const unapproved = placement.weekly_submissions.some((w: { status: string; }) => w.status !== 'APPROVED');
    if (unapproved || placement.weekly_submissions.length === 0) {
      return res.status(400).json({
        status: 'error',
        message: 'Cannot issue clearance: Placement contains unapproved or missing weekly logs',
      });
    }

    const payload = `${placement.student_id}-${placement.id}-${Date.now()}`;
    const verificationCode = crypto
      .createHash('sha256')
      .update(payload)
      .digest('hex')
      .substring(0, 16)
      .toUpperCase();

    const clearance = await prisma.finalClearance.upsert({
      where: { placement_id: placementId },
      update: {
        coordinator_status: 'CLEARED',
        coordinator_cleared_at: new Date(),
        final_pdf_hash: verificationCode,
        clearance_timestamp: new Date(),
      },
      create: {
        placement_id: placementId,
        coordinator_status: 'CLEARED',
        coordinator_cleared_at: new Date(),
        final_pdf_hash: verificationCode,
        clearance_timestamp: new Date(),
      },
    });

    return res.status(200).json({
      status: 'success',
      message: 'Official Form ITF-08 clearance issued successfully',
      data: {
        verification_code: clearance.final_pdf_hash,
        cleared_at: clearance.coordinator_cleared_at,
      },
    });
  } catch (error) {
    next(error);
  }
}

export async function getPublicVerification(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<Response | void> {
  try {
    const { code } = req.params;

    const clearance = await prisma.finalClearance.findFirst({
      where: { final_pdf_hash: code },
      include: {
        placement: {
          include: {
            student: { select: { name: true, matric_no: true } },
            ind_supervisor: { select: { name: true } },
          },
        },
      },
    });

    if (!clearance) {
      return res.status(404).json({
        status: 'error',
        valid: false,
        message: 'Invalid or non-existent clearance verification hash',
      });
    }

    return res.status(200).json({
      status: 'success',
      valid: true,
      message: 'Authentic Form ITF-08 Digital Record',
      data: {
        student_name: clearance.placement.student.name,
        matric_no: clearance.placement.student.matric_no,
        company: clearance.placement.company_name,
        supervisor:
          clearance.placement.ind_supervisor?.name ||
          clearance.placement.ind_supervisor_name ||
          clearance.placement.ind_supervisor_email,
        coordinator_cleared_at: clearance.coordinator_cleared_at,
        coordinator_status: clearance.coordinator_status,
        itf_status: clearance.itf_status,
      },
    });
  } catch (error) {
    next(error);
  }
}