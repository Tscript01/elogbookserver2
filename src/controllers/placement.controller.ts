import { Response, NextFunction } from 'express';
import { prisma } from '../config/prisma';
import { AuthenticatedRequest } from '../middlewares/auth';

const MINIMUM_DURATION_MS = 30 * 24 * 60 * 60 * 1000; // 30 days minimum duration

export const createPlacement = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  try {
    const {
      company_name,
      company_address,
      company_contact,
      company_email,
      supervisor_email,
      ind_supervisor_id,
      inst_coordinator_id,
      start_date,
      end_date
    } = req.body;

    const userId = req.user?.id;
    if (!userId) {
      return res.status(401).json({ error: 'Unauthorized: No user ID found in token' });
    }

    if (!company_name || !start_date || !end_date) {
      return res.status(400).json({ error: 'Company name, start date, and end date are mandatory' });
    }

    const startDate = new Date(start_date);
    const endDate = new Date(end_date);

    if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
      return res.status(400).json({ error: 'Invalid start or end date format' });
    }

    if (endDate.getTime() <= startDate.getTime()) {
      return res.status(400).json({ error: 'Training conclusion date must be later than commencement date' });
    }

    const durationMs = endDate.getTime() - startDate.getTime();
    if (durationMs < MINIMUM_DURATION_MS) {
      return res.status(400).json({
        error: 'SIWES industrial training duration must be at least 1 month (30 days)'
      });
    }

    const existingPlacement = await prisma.placement.findFirst({
      where: { student_id: userId }
    });

    if (existingPlacement) {
      return res.status(409).json({
        error: 'You already have an active placement registered. Update your existing placement instead.'
      });
    }

    let resolvedSupervisorId: string | null = ind_supervisor_id || null;
    if (!resolvedSupervisorId && supervisor_email) {
      const supervisor = await prisma.user.findFirst({
        where: {
          email: supervisor_email.trim().toLowerCase(),
          role: 'IND_SUPERVISOR'
        },
        select: { id: true }
      });
      if (supervisor) {
        resolvedSupervisorId = supervisor.id;
      }
    }

    const placement = await prisma.placement.create({
      data: {
        student_id: userId,
        company_name: company_name.trim(),
        company_address: company_address?.trim() || null,
        company_contact: company_contact?.trim() || null,
        company_email: company_email?.trim().toLowerCase() || null,
        ind_supervisor_id: resolvedSupervisorId,
        inst_coordinator_id: inst_coordinator_id || null,
        start_date: startDate,
        end_date: endDate,
      },
      include: {
        ind_supervisor: {
          select: { id: true, name: true, email: true }
        },
        inst_coordinator: {
          select: { id: true, name: true, email: true }
        }
      }
    });

    return res.status(201).json({
      message: 'Placement created successfully',
      placement
    });
  } catch (error) {
    console.error('Error creating placement:', error);
    next(error);
  }
};

export const updatePlacement = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      return res.status(401).json({ error: 'Unauthorized: No user ID found in token' });
    }

    const existing = await prisma.placement.findFirst({
      where: { student_id: userId }
    });

    if (!existing) {
      return res.status(404).json({ error: 'No active placement found to update' });
    }

    const {
      company_name,
      company_address,
      company_contact,
      company_email,
      supervisor_email,
      ind_supervisor_id,
      start_date,
      end_date
    } = req.body;

    const startDate = start_date ? new Date(start_date) : existing.start_date;
    const endDate = end_date ? new Date(end_date) : existing.end_date;

    if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
      return res.status(400).json({ error: 'Invalid start or end date format' });
    }

    if (endDate.getTime() <= startDate.getTime()) {
      return res.status(400).json({ error: 'Training conclusion date must be later than commencement date' });
    }

    if (endDate.getTime() - startDate.getTime() < MINIMUM_DURATION_MS) {
      return res.status(400).json({
        error: 'SIWES industrial training duration must be at least 1 month (30 days)'
      });
    }

    let resolvedSupervisorId = existing.ind_supervisor_id;
    if (ind_supervisor_id !== undefined) {
      resolvedSupervisorId = ind_supervisor_id || null;
    } else if (supervisor_email) {
      const supervisor = await prisma.user.findFirst({
        where: {
          email: supervisor_email.trim().toLowerCase(),
          role: 'IND_SUPERVISOR'
        },
        select: { id: true }
      });
      resolvedSupervisorId = supervisor ? supervisor.id : null;
    }

    const updated = await prisma.placement.update({
      where: { id: existing.id },
      data: {
        company_name: company_name ? company_name.trim() : existing.company_name,
        company_address: company_address !== undefined ? (company_address?.trim() || null) : existing.company_address,
        company_contact: company_contact !== undefined ? (company_contact?.trim() || null) : existing.company_contact,
        company_email: company_email !== undefined ? (company_email?.trim().toLowerCase() || null) : existing.company_email,
        ind_supervisor_id: resolvedSupervisorId,
        start_date: startDate,
        end_date: endDate
      },
      include: {
        ind_supervisor: {
          select: { id: true, name: true, email: true }
        }
      }
    });

    return res.status(200).json({
      message: 'Placement updated successfully',
      placement: updated
    });
  } catch (error) {
    console.error('Error updating placement:', error);
    next(error);
  }
};

export const getCurrentPlacement = async (
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
      include: {
        ind_supervisor: {
          select: { id: true, name: true, email: true }
        },
        inst_coordinator: {
          select: { id: true, name: true, email: true }
        }
      }
    });

    if (!placement) {
      return res.status(404).json({ error: 'No active placement found for this student' });
    }

    // Returns the complete placement object (including ind_supervisor_name & ind_supervisor_email)
    return res.status(200).json(placement);
  } catch (error) {
    console.error('Error retrieving current placement:', error);
    next(error);
  }
};
export const getPlacementById = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  try {
    const { id } = req.params;

    const placement = await prisma.placement.findUnique({
      where: { id },
      include: {
        ind_supervisor: {
          select: { id: true, name: true, email: true }
        },
        inst_coordinator: {
          select: { id: true, name: true, email: true }
        }
      }
    });

    if (!placement) {
      return res.status(404).json({ error: 'Placement not found' });
    }

    return res.status(200).json(placement);
  } catch (error) {
    console.error('Error retrieving placement by id:', error);
    next(error);
  }
};


export const updatePlacementById = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  try {
    const userId = req.user?.id;
    const userRole = req.user?.role;
    const { id } = req.params;

    if (!userId) {
      return res.status(401).json({ error: 'Unauthorized: No user ID found in token' });
    }

    const existing = await prisma.placement.findUnique({
      where: { id },
    });

    if (!existing) {
      return res.status(404).json({ error: 'Placement not found' });
    }

    if (userRole !== 'ADMIN' && existing.student_id !== userId) {
      return res.status(403).json({ error: 'Forbidden: You can only update your own placement' });
    }

    const {
      company_name,
      company_address,
      company_contact,
      company_email,
      ind_supervisor_name,
      ind_supervisor_email,
      supervisor_email, // fallback alias
      ind_supervisor_id,
      inst_coordinator_id,
      start_date,
      end_date,
    } = req.body;

    const startDate = start_date ? new Date(start_date) : existing.start_date;
    const endDate = end_date ? new Date(end_date) : existing.end_date;

    if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
      return res.status(400).json({ error: 'Invalid start or end date format' });
    }

    if (endDate.getTime() <= startDate.getTime()) {
      return res.status(400).json({ error: 'Training conclusion date must be later than commencement date' });
    }

    if (endDate.getTime() - startDate.getTime() < MINIMUM_DURATION_MS) {
      return res.status(400).json({
        error: 'SIWES industrial training duration must be at least 1 month (30 days)',
      });
    }

    // Resolve supervisor email (prefer ind_supervisor_email, fallback to supervisor_email)
    const targetSupervisorEmail = ind_supervisor_email !== undefined
      ? (ind_supervisor_email ? ind_supervisor_email.trim().toLowerCase() : null)
      : (supervisor_email !== undefined ? (supervisor_email ? supervisor_email.trim().toLowerCase() : null) : undefined);

    let resolvedSupervisorId = existing.ind_supervisor_id;
    if (ind_supervisor_id !== undefined) {
      resolvedSupervisorId = ind_supervisor_id;
    } else if (targetSupervisorEmail) {
      const supervisor = await prisma.user.findFirst({
        where: {
          email: targetSupervisorEmail,
          role: 'IND_SUPERVISOR',
        },
        select: { id: true },
      });
      resolvedSupervisorId = supervisor ? supervisor.id : null;
    }

    const updated = await prisma.placement.update({
      where: { id },
      data: {
        company_name: company_name !== undefined ? company_name.trim() : existing.company_name,
        company_address: company_address !== undefined ? company_address : existing.company_address,
        company_contact: company_contact !== undefined ? company_contact : existing.company_contact,
        company_email: company_email !== undefined ? (company_email ? company_email.trim().toLowerCase() : null) : existing.company_email,
        ind_supervisor_name: ind_supervisor_name !== undefined ? (ind_supervisor_name ? ind_supervisor_name.trim() : null) : (existing as any).ind_supervisor_name,
        ind_supervisor_email: targetSupervisorEmail !== undefined ? targetSupervisorEmail : (existing as any).ind_supervisor_email,
        ind_supervisor_id: resolvedSupervisorId,
        inst_coordinator_id: inst_coordinator_id !== undefined ? inst_coordinator_id : existing.inst_coordinator_id,
        start_date: startDate,
        end_date: endDate,
      },
      include: {
        ind_supervisor: {
          select: { id: true, name: true, email: true },
        },
        inst_coordinator: {
          select: { id: true, name: true, email: true },
        },
      },
    });

    return res.status(200).json({
      message: 'Placement updated successfully',
      placement: updated,
    });
  } catch (error) {
    console.error('Error updating placement:', error);
    next(error);
  }
};