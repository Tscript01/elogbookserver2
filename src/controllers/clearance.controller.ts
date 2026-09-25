import { Response, NextFunction } from 'express';
import { AuthenticatedRequest } from '../middlewares/auth';
import {prisma} from '../config/prisma';

export async function getStudentClearanceStatus(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<Response | void> {
  try {
    const studentId = req.user?.id;

    if (!studentId) {
      return res.status(401).json({ status: 'error', message: 'Unauthorized' });
    }

    const placement = await prisma.placement.findUnique({
      where: { student_id: studentId },
      include: {
        student: {
          select: {
            id: true,
            name: true,
            email: true,
            matric_no: true,
            department: true,
          },
        },
        inst_coordinator: {
          select: {
            id: true,
            name: true,
            email: true,
            department: true,
          },
        },
        clearance: true,
        weekly_submissions: {
          select: {
            id: true,
            week_no: true,
            status: true,
            supervisor_remarks: true,
          },
          orderBy: { week_no: 'asc' },
        },
      },
    });

    if (!placement) {
      return res.status(404).json({
        status: 'error',
        message: 'No placement registered for this student yet.',
      });
    }

    return res.status(200).json({
      status: 'success',
      data: {
        placement,
        clearance: placement.clearance,
        weekly_submissions: placement.weekly_submissions,
      },
    });
  } catch (error) {
    next(error);
  }
}

export async function submitForItfStamp(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<Response | void> {
  try {
    const studentId = req.user?.id;

    const placement = await prisma.placement.findUnique({
      where: { student_id: studentId },
      include: { clearance: true },
    });

    if (!placement) {
      return res.status(404).json({ status: 'error', message: 'Placement not found' });
    }

    if (placement.clearance?.coordinator_status !== 'CLEARED') {
      return res.status(400).json({
        status: 'error',
        message: 'Cannot forward to ITF: Institutional Coordinator evaluation is still pending.',
      });
    }

    const updated = await prisma.finalClearance.update({
      where: { placement_id: placement.id },
      data: {
        itf_status: 'SUBMITTED',
      },
    });

    return res.status(200).json({
      status: 'success',
      message: 'Logbook dossier submitted to ITF Area Office for final certification.',
      data: updated,
    });
  } catch (error) {
    next(error);
  }
}

export async function downloadEndorsedLogbookPdf(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<Response | void> {
  try {
    const studentId = req.user?.id;

    const placement = await prisma.placement.findUnique({
      where: { student_id: studentId },
      include: {
        student: true,
        inst_coordinator: true,
        clearance: true,
        weekly_submissions: {
          include: {
            daily_logs: { orderBy: { log_date: 'asc' } },
          },
          orderBy: { week_no: 'asc' },
        },
      },
    });

    if (!placement || placement.clearance?.coordinator_status !== 'CLEARED') {
      return res.status(403).json({
        status: 'error',
        message: 'Logbook download is locked until institutional clearance is completed.',
      });
    }

    // Return dummy text/pdf headers or piped pdf stream
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader(
      'Content-Disposition',
      `attachment; filename=SIWES_Logbook_${placement.student.matric_no || 'Dossier'}.pdf`
    );

    // Dummy placeholder buffer so download doesn't crash if PDF engine isn't configured yet
    const dummyPdfBuffer = Buffer.from('%PDF-1.4\n1 0 obj\n<<>>\nendobj\ntrailer\n<<>>\n%%EOF');
    return res.send(dummyPdfBuffer);
  } catch (error) {
    next(error);
  }
}