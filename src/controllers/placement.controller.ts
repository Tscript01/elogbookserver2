import { Response, NextFunction } from 'express';
import bcrypt from 'bcryptjs';
import { prisma } from '../config/prisma';
import { AuthenticatedRequest } from '../middlewares/auth';
import { sendEmail } from '../utils/resend';

const MINIMUM_DURATION_MS = 30 * 24 * 60 * 60 * 1000;

export const createPlacement = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  try {
    const {
      company_name,
      state,
      city,
      company_address,
      company_contact,
      company_email,
      ind_supervisor_name,
      supervisor_email,
      ind_supervisor_email,
      ind_supervisor_id,
      inst_coordinator_id,
      start_date,
      end_date
    } = req.body;

    const userId = req.user?.id;
    if (!userId) {
      return res.status(401).json({ error: 'Unauthorized: No user ID found in token' });
    }

    if (!company_name || !state || !city || !start_date || !end_date) {
      return res.status(400).json({
        error: 'Company name, state, town/city, start date, and end date are mandatory'
      });
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

    const targetSupervisorEmail = ind_supervisor_email !== undefined
      ? (ind_supervisor_email ? String(ind_supervisor_email).trim().toLowerCase() : null)
      : (supervisor_email !== undefined ? (supervisor_email ? String(supervisor_email).trim().toLowerCase() : null) : null);

    const supervisorName = ind_supervisor_name ? String(ind_supervisor_name).trim() : 'Industrial Supervisor';

    let resolvedSupervisorId: string | null = ind_supervisor_id || null;

    if (!resolvedSupervisorId && targetSupervisorEmail) {
      let supervisor = await prisma.user.findFirst({
        where: {
          email: targetSupervisorEmail,
          role: 'IND_SUPERVISOR'
        },
        select: { id: true }
      });

      if (!supervisor) {
        const tempPassword = Math.random().toString(36).slice(-10);
        const passwordHash = await bcrypt.hash(tempPassword, 10);

        supervisor = await prisma.user.create({
          data: {
            name: supervisorName,
            email: targetSupervisorEmail,
            password_hash: passwordHash,
            role: 'IND_SUPERVISOR'
          },
          select: { id: true }
        });
      }
      resolvedSupervisorId = supervisor.id;
    }

    const placement = await prisma.placement.create({
      data: {
        student_id: userId,
        company_name: String(company_name).trim(),
        state: String(state).trim(),
        city: String(city).trim(),
        company_address: company_address ? String(company_address).trim() : null,
        company_contact: company_contact ? String(company_contact).trim() : null,
        company_email: company_email ? String(company_email).trim().toLowerCase() : null,
        ind_supervisor_name: supervisorName,
        ind_supervisor_email: targetSupervisorEmail,
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

    if (targetSupervisorEmail) {
      const loginUrl = process.env.FRONTEND_URL || 'http://localhost:3000';
      const supervisorNames = supervisorName || 'Industrial Supervisor';
      const studentName = req.user?.name || 'A student';

      const subject = 'SIWES Industrial Supervision Assignment';
      const htmlContent = `
        <div style="font-family: sans-serif; color: #1e293b; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px;">
          <h2 style="color: #059669;">Hello ${supervisorNames},</h2>
          <p><strong>${studentName}</strong> has listed you as their Industrial Supervisor at <strong>${placement.company_name}</strong> (${placement.city}, ${placement.state}) on the Elog SIWES platform.</p>
          <p>An account has been associated with this email address. You can log in to review, inspect, and approve weekly logbook submissions for all your assigned interns.</p>
          <p style="margin: 30px 0;">
            <a href="${loginUrl}/login" style="background: #059669; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block;">Access Supervisor Portal</a>
          </p>
          <p style="font-size: 12px; color: #64748b;">If you forgot your password, use the password reset option on the login page.</p>
        </div>
      `;

      sendEmail(targetSupervisorEmail, subject, htmlContent).catch((err) =>
        console.error('Failed to send supervisor invitation email:', err)
      );
    }

    return res.status(201).json({
      message: 'Placement created successfully',
      placement,
      ...placement
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

    const paramId = req.params?.id;
    let existing = null;

    if (paramId) {
      existing = await prisma.placement.findUnique({ where: { id: paramId } });
    }
    if (!existing) {
      existing = await prisma.placement.findFirst({ where: { student_id: userId } });
    }

    if (!existing) {
      return res.status(404).json({ error: 'No active placement found to update' });
    }

    const {
      company_name,
      state,
      city,
      company_address,
      company_contact,
      company_email,
      ind_supervisor_name,
      supervisor_email,
      ind_supervisor_email,
      ind_supervisor_id,
      inst_coordinator_id,
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

    const targetSupervisorEmail = ind_supervisor_email !== undefined
      ? (ind_supervisor_email ? String(ind_supervisor_email).trim().toLowerCase() : null)
      : (supervisor_email !== undefined ? (supervisor_email ? String(supervisor_email).trim().toLowerCase() : null) : existing.ind_supervisor_email);

    const supervisorName = ind_supervisor_name !== undefined
      ? (ind_supervisor_name ? String(ind_supervisor_name).trim() : null)
      : existing.ind_supervisor_name;

    let resolvedSupervisorId = existing.ind_supervisor_id;
    if (ind_supervisor_id !== undefined) {
      resolvedSupervisorId = ind_supervisor_id || null;
    } else if (targetSupervisorEmail) {
      let supervisor = await prisma.user.findFirst({
        where: {
          email: targetSupervisorEmail,
          role: 'IND_SUPERVISOR'
        },
        select: { id: true }
      });

      if (!supervisor) {
        const tempPassword = Math.random().toString(36).slice(-10);
        const passwordHash = await bcrypt.hash(tempPassword, 10);

        supervisor = await prisma.user.create({
          data: {
            name: supervisorName || 'Industrial Supervisor',
            email: targetSupervisorEmail,
            password_hash: passwordHash,
            role: 'IND_SUPERVISOR'
          },
          select: { id: true }
        });
      }
      resolvedSupervisorId = supervisor ? supervisor.id : null;
    }

    const resolvedState = state !== undefined && state !== null && String(state).trim() !== ''
      ? String(state).trim()
      : existing.state;

    const resolvedCity = city !== undefined && city !== null && String(city).trim() !== ''
      ? String(city).trim()
      : existing.city;

    const updated = await prisma.placement.update({
      where: { id: existing.id },
      data: {
        company_name: company_name ? String(company_name).trim() : existing.company_name,
        state: resolvedState,
        city: resolvedCity,
        company_address: company_address !== undefined ? (company_address ? String(company_address).trim() : null) : existing.company_address,
        company_contact: company_contact !== undefined ? (company_contact ? String(company_contact).trim() : null) : existing.company_contact,
        company_email: company_email !== undefined ? (company_email ? String(company_email).trim().toLowerCase() : null) : existing.company_email,
        ind_supervisor_name: supervisorName,
        ind_supervisor_email: targetSupervisorEmail,
        ind_supervisor_id: resolvedSupervisorId,
        inst_coordinator_id: inst_coordinator_id !== undefined ? inst_coordinator_id : existing.inst_coordinator_id,
        start_date: startDate,
        end_date: endDate
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

    return res.status(200).json({
      message: 'Placement updated successfully',
      placement: updated,
      ...updated
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

    return res.status(200).json({
      placement,
      ...placement
    });
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

    return res.status(200).json({
      placement,
      ...placement
    });
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

    let existing = await prisma.placement.findUnique({
      where: { id },
    });

    if (!existing) {
      existing = await prisma.placement.findFirst({
        where: { student_id: userId }
      });
    }

    if (!existing) {
      return res.status(404).json({ error: 'Placement not found' });
    }

    if (userRole !== 'ADMIN' && existing.student_id !== userId) {
      return res.status(403).json({ error: 'Forbidden: You can only update your own placement' });
    }

    const {
      company_name,
      state,
      city,
      company_address,
      company_contact,
      company_email,
      ind_supervisor_name,
      ind_supervisor_email,
      supervisor_email,
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

    const targetSupervisorEmail = ind_supervisor_email !== undefined
      ? (ind_supervisor_email ? String(ind_supervisor_email).trim().toLowerCase() : null)
      : (supervisor_email !== undefined ? (supervisor_email ? String(supervisor_email).trim().toLowerCase() : null) : existing.ind_supervisor_email);

    const supervisorName = ind_supervisor_name !== undefined
      ? (ind_supervisor_name ? String(ind_supervisor_name).trim() : null)
      : existing.ind_supervisor_name;

    let resolvedSupervisorId = existing.ind_supervisor_id;
    if (ind_supervisor_id !== undefined) {
      resolvedSupervisorId = ind_supervisor_id || null;
    } else if (targetSupervisorEmail) {
      let supervisor = await prisma.user.findFirst({
        where: {
          email: targetSupervisorEmail,
          role: 'IND_SUPERVISOR',
        },
        select: { id: true },
      });

      if (!supervisor) {
        const tempPassword = Math.random().toString(36).slice(-10);
        const passwordHash = await bcrypt.hash(tempPassword, 10);

        supervisor = await prisma.user.create({
          data: {
            name: supervisorName || 'Industrial Supervisor',
            email: targetSupervisorEmail,
            password_hash: passwordHash,
            role: 'IND_SUPERVISOR',
          },
          select: { id: true },
        });
      }
      resolvedSupervisorId = supervisor ? supervisor.id : null;
    }

    const resolvedState = state !== undefined && state !== null && String(state).trim() !== ''
      ? String(state).trim()
      : existing.state;

    const resolvedCity = city !== undefined && city !== null && String(city).trim() !== ''
      ? String(city).trim()
      : existing.city;

    const updated = await prisma.placement.update({
      where: { id: existing.id },
      data: {
        company_name: company_name !== undefined && company_name !== null ? String(company_name).trim() : existing.company_name,
        state: resolvedState,
        city: resolvedCity,
        company_address: company_address !== undefined ? (company_address ? String(company_address).trim() : null) : existing.company_address,
        company_contact: company_contact !== undefined ? (company_contact ? String(company_contact).trim() : null) : existing.company_contact,
        company_email: company_email !== undefined ? (company_email ? String(company_email).trim().toLowerCase() : null) : existing.company_email,
        ind_supervisor_name: supervisorName,
        ind_supervisor_email: targetSupervisorEmail,
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
      ...updated
    });
  } catch (error) {
    console.error('Error updating placement:', error);
    next(error);
  }
};