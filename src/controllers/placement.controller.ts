import { Response, NextFunction } from 'express';
import bcrypt from 'bcryptjs';
import { prisma } from '../config/prisma';
import { AuthenticatedRequest } from '../middlewares/auth';
import { sendEmail } from '../utils/resend';

const MINIMUM_DURATION_MS = 30 * 24 * 60 * 60 * 1000;

const placementInclude = {
  ind_supervisor: {
    select: { id: true, name: true, email: true },
  },
  inst_coordinator: {
    select: { id: true, name: true, email: true },
  },
  student: {
    select: { id: true, name: true, email: true, matric_no: true, department: true },
  },
};

const sanitizeString = (val: unknown): string => {
  return typeof val === 'string' ? val.trim() : '';
};

interface SupervisorResolutionResult {
  supervisorId: string | null;
  isNewAccount: boolean;
}

const resolveSupervisor = async (
  email?: string | null,
  name?: string | null
): Promise<SupervisorResolutionResult> => {
  if (!email) return { supervisorId: null, isNewAccount: false };
  const normalizedEmail = email.trim().toLowerCase();

  let supervisor = await prisma.user.findFirst({
    where: { email: normalizedEmail, role: 'IND_SUPERVISOR' },
    select: { id: true },
  });

  if (supervisor) {
    return { supervisorId: supervisor.id, isNewAccount: false };
  }

  const tempPassword = Math.random().toString(36).slice(-10);
  const passwordHash = await bcrypt.hash(tempPassword, 10);

  supervisor = await prisma.user.create({
    data: {
      name: name?.trim() || 'Industrial Supervisor',
      email: normalizedEmail,
      password_hash: passwordHash,
      role: 'IND_SUPERVISOR',
    },
    select: { id: true },
  });

  return { supervisorId: supervisor.id, isNewAccount: true };
};

const sendSupervisorOnboardingEmail = async (
  recipientEmail: string,
  supervisorName: string,
  studentName: string,
  placement: any
) => {
  const loginUrl = process.env.FRONTEND_URL || 'http://localhost:3000';
  const subject = 'SIWES Industrial Supervision Assignment (Account Created)';
  const htmlContent = `
    <div style="font-family: sans-serif; color: #1e293b; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px;">
      <h2 style="color: #059669; margin-top: 0;">Hello ${supervisorName},</h2>
      <p><strong>${studentName}</strong> has listed you as their Industrial Supervisor at <strong>${placement.company_name}</strong> (${placement.city}, ${placement.state}) on the Elog SIWES platform.</p>
      <p>A new supervisor account has been provisioned for this email address. You can log in to review, inspect, and approve weekly logbook submissions for your assigned trainees.</p>
      <div style="background-color: #f8fafc; border-left: 4px solid #059669; padding: 12px; margin: 20px 0; border-radius: 4px;">
        <p style="margin: 0; font-size: 13px;"><strong>Training Period:</strong> ${new Date(placement.start_date).toLocaleDateString()} &mdash; ${new Date(placement.end_date).toLocaleDateString()}</p>
        <p style="margin: 4px 0 0 0; font-size: 13px;"><strong>Location:</strong> ${placement.city}, ${placement.state}</p>
      </div>
      <p style="margin: 30px 0;">
        <a href="${loginUrl}/login" style="background: #059669; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block;">Access Supervisor Portal</a>
      </p>
      <p style="font-size: 12px; color: #64748b;">If you need to set your password, use the "Forgot Password" link on the login page.</p>
    </div>
  `;

  await sendEmail(recipientEmail, subject, htmlContent);
};

const sendSupervisorAssignmentNotificationEmail = async (
  recipientEmail: string,
  supervisorName: string,
  studentName: string,
  studentMatric: string | null,
  placement: any
) => {
  const loginUrl = process.env.FRONTEND_URL || 'http://localhost:3000';
  const subject = 'SIWES Placement Update: New Trainee Assigned';
  const htmlContent = `
    <div style="font-family: sans-serif; color: #1e293b; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px;">
      <h2 style="color: #2563eb; margin-top: 0;">Hello ${supervisorName},</h2>
      <p>A SIWES student trainee has assigned or updated their industrial training placement to your supervision on the Elog SIWES platform.</p>
      <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; padding: 14px; margin: 20px 0; border-radius: 8px;">
        <p style="margin: 0 0 6px 0; font-size: 13px;"><strong>Trainee Name:</strong> ${studentName}</p>
        ${studentMatric ? `<p style="margin: 0 0 6px 0; font-size: 13px;"><strong>Matric No:</strong> ${studentMatric}</p>` : ''}
        <p style="margin: 0 0 6px 0; font-size: 13px;"><strong>Organization:</strong> ${placement.company_name}</p>
        <p style="margin: 0 0 6px 0; font-size: 13px;"><strong>Location:</strong> ${placement.city}, ${placement.state}</p>
        <p style="margin: 0; font-size: 13px;"><strong>Duration:</strong> ${new Date(placement.start_date).toLocaleDateString()} to ${new Date(placement.end_date).toLocaleDateString()}</p>
      </div>
      <p style="margin: 24px 0;">
        <a href="${loginUrl}/login" style="background: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block;">Open Supervisor Workspace</a>
      </p>
      <p style="font-size: 12px; color: #64748b;">Log entries submitted by this trainee will appear in your pending approvals queue.</p>
    </div>
  `;

  await sendEmail(recipientEmail, subject, htmlContent);
};

export const createPlacement = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      return res.status(401).json({ error: 'Unauthorized: No user ID found in token' });
    }

    const company_name = sanitizeString(req.body.company_name);
    const state = sanitizeString(req.body.state);
    const city = sanitizeString(req.body.city);
    const start_date = req.body.start_date;
    const end_date = req.body.end_date;

    if (!company_name || !state || !city || !start_date || !end_date) {
      return res.status(400).json({
        error: 'Company name, state, town/city, start date, and end date are mandatory',
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

    if (endDate.getTime() - startDate.getTime() < MINIMUM_DURATION_MS) {
      return res.status(400).json({
        error: 'SIWES industrial training duration must be at least 1 month (30 days)',
      });
    }

    const existingPlacement = await prisma.placement.findFirst({
      where: { student_id: userId },
    });

    if (existingPlacement) {
      return res.status(409).json({
        error: 'You already have an active placement registered. Update your existing placement instead.',
      });
    }

    const rawSupEmail = req.body.ind_supervisor_email || req.body.supervisor_email;
    const targetSupervisorEmail = typeof rawSupEmail === 'string' && rawSupEmail.trim()
      ? rawSupEmail.trim().toLowerCase()
      : null;

    const rawSupName = req.body.ind_supervisor_name;
    const supervisorName = typeof rawSupName === 'string' && rawSupName.trim()
      ? rawSupName.trim()
      : 'Industrial Supervisor';

    const { supervisorId: resolvedSupervisorId, isNewAccount } = await resolveSupervisor(
      targetSupervisorEmail,
      supervisorName
    );

    const company_address = sanitizeString(req.body.company_address) || null;
    const company_contact = sanitizeString(req.body.company_contact) || null;
    const company_email = sanitizeString(req.body.company_email).toLowerCase() || null;

    const placement = await prisma.placement.create({
      data: {
        student_id: userId,
        company_name,
        state,
        city,
        company_address,
        company_contact,
        company_email,
        ind_supervisor_name: supervisorName,
        ind_supervisor_email: targetSupervisorEmail,
        ind_supervisor_id: resolvedSupervisorId,
        start_date: startDate,
        end_date: endDate,
      },
      include: placementInclude,
    });

    if (targetSupervisorEmail) {
      const studentName = req.user?.name || 'A student';
      const studentMatric = (req.user as any)?.matric_no || null;

      try {
        if (isNewAccount) {
          await sendSupervisorOnboardingEmail(
            targetSupervisorEmail,
            supervisorName,
            studentName,
            placement
          );
        } else {
          await sendSupervisorAssignmentNotificationEmail(
            targetSupervisorEmail,
            supervisorName,
            studentName,
            studentMatric,
            placement
          );
        }
      } catch (err) {
        console.error('[EMAIL ERROR] Failed to dispatch supervisor email on placement creation:', err);
      }
    }

    return res.status(201).json({
      message: 'Placement created successfully',
      placement,
    });
  } catch (error) {
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
    const userRole = req.user?.role;
    if (!userId) {
      return res.status(401).json({ error: 'Unauthorized: No user ID found in token' });
    }

    const paramId = req.params?.id;
    let existing = null;

    if (paramId) {
      existing = await prisma.placement.findUnique({
        where: { id: paramId },
        include: {
          student: {
            select: { id: true, name: true, matric_no: true },
          },
        },
      });
    }
    if (!existing) {
      existing = await prisma.placement.findFirst({
        where: { student_id: userId },
        include: {
          student: {
            select: { id: true, name: true, matric_no: true },
          },
        },
      });
    }

    if (!existing) {
      return res.status(404).json({ error: 'No active placement found to update' });
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
      supervisor_email,
      ind_supervisor_email,
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

    const dataToUpdate: any = {
      start_date: startDate,
      end_date: endDate,
    };

    const cleanCompany = sanitizeString(company_name);
    if (cleanCompany) dataToUpdate.company_name = cleanCompany;

    const cleanState = sanitizeString(state);
    if (cleanState) dataToUpdate.state = cleanState;

    const cleanCity = sanitizeString(city);
    if (cleanCity) dataToUpdate.city = cleanCity;

    if (company_address !== undefined) {
      dataToUpdate.company_address = sanitizeString(company_address) || null;
    }
    if (company_contact !== undefined) {
      dataToUpdate.company_contact = sanitizeString(company_contact) || null;
    }
    if (company_email !== undefined) {
      dataToUpdate.company_email = sanitizeString(company_email).toLowerCase() || null;
    }

    const rawSupEmail = ind_supervisor_email !== undefined ? ind_supervisor_email : supervisor_email;
    let shouldSendSupervisorEmail = false;
    let isSupervisorNewAccount = false;
    let targetSupervisorEmail: string | null = null;
    let resolvedSupervisorName: string = existing.ind_supervisor_name || 'Industrial Supervisor';

    if (rawSupEmail !== undefined) {
      targetSupervisorEmail = sanitizeString(rawSupEmail).toLowerCase() || null;
      dataToUpdate.ind_supervisor_email = targetSupervisorEmail;

      const incomingName = ind_supervisor_name !== undefined
        ? sanitizeString(ind_supervisor_name)
        : existing.ind_supervisor_name;

      if (incomingName) {
        resolvedSupervisorName = incomingName;
        dataToUpdate.ind_supervisor_name = incomingName;
      }

      if (targetSupervisorEmail) {
        const { supervisorId, isNewAccount } = await resolveSupervisor(
          targetSupervisorEmail,
          resolvedSupervisorName
        );
        dataToUpdate.ind_supervisor_id = supervisorId;
        isSupervisorNewAccount = isNewAccount;

        const emailChanged = targetSupervisorEmail !== (existing.ind_supervisor_email || '').toLowerCase();
        if (emailChanged || isNewAccount) {
          shouldSendSupervisorEmail = true;
        }
      } else {
        dataToUpdate.ind_supervisor_id = null;
      }
    } else if (ind_supervisor_name !== undefined) {
      const cleanName = sanitizeString(ind_supervisor_name);
      if (cleanName) dataToUpdate.ind_supervisor_name = cleanName;
    }

    const updated = await prisma.placement.update({
      where: { id: existing.id },
      data: dataToUpdate,
      include: placementInclude,
    });

    if (shouldSendSupervisorEmail && targetSupervisorEmail) {
      const studentName = existing.student?.name || req.user?.name || 'A student';
      const studentMatric = existing.student?.matric_no || (req.user as any)?.matric_no || null;

      try {
        if (isSupervisorNewAccount) {
          await sendSupervisorOnboardingEmail(
            targetSupervisorEmail,
            resolvedSupervisorName,
            studentName,
            updated
          );
        } else {
          await sendSupervisorAssignmentNotificationEmail(
            targetSupervisorEmail,
            resolvedSupervisorName,
            studentName,
            studentMatric,
            updated
          );
        }
      } catch (err) {
        console.error('[EMAIL ERROR] Failed to dispatch supervisor email on placement update:', err);
      }
    }

    return res.status(200).json({
      message: 'Placement updated successfully',
      placement: updated,
    });
  } catch (error) {
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
      include: placementInclude,
    });

    if (!placement) {
      return res.status(404).json({ error: 'No active placement found for this student' });
    }

    return res.status(200).json({ placement });
  } catch (error) {
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
      include: placementInclude,
    });

    if (!placement) {
      return res.status(404).json({ error: 'Placement not found' });
    }

    return res.status(200).json({ placement });
  } catch (error) {
    next(error);
  }
};

export const updatePlacementById = updatePlacement;