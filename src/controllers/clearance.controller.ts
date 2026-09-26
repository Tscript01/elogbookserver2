import { Response, NextFunction } from 'express';
import { AuthenticatedRequest } from '../middlewares/auth';
import {prisma} from '../config/prisma';
import PDFDocument from 'pdfkit';

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
          },
        },
        inst_coordinator: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
        clearance: true,
        weekly_submissions: {
          include: {
            daily_logs: { orderBy: { log_date: 'asc' } },
          },
          orderBy: { week_no: 'asc' },
        },
      },
    });

    if (!placement) {
      return res.status(404).json({
        status: 'error',
        message: 'No placement registered for this student.',
      });
    }

    if (placement.clearance?.coordinator_status !== 'CLEARED') {
      return res.status(403).json({
        status: 'error',
        message: 'Logbook download is locked until institutional clearance is completed.',
      });
    }

    // Set PDF response headers
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader(
      'Content-Disposition',
      `attachment; filename=SIWES_Logbook_${placement.student.matric_no || 'Docket'}.pdf`
    );

    // Create a valid PDF document
    const doc = new PDFDocument({ margin: 50, size: 'A4' });
    doc.pipe(res);

    // Header & Title
    doc.fontSize(18).font('Helvetica-Bold').text('SIWES LOGBOOK DOSSIER (FORM ITF-08)', { align: 'center' });
    doc.moveDown(0.5);
    doc.fontSize(10).font('Helvetica').text('FEDERAL REPUBLIC OF NIGERIA - INDUSTRIAL TRAINING FUND', { align: 'center' });
    doc.moveDown(1.5);

    // Trainee & Placement Info
    doc.fontSize(12).font('Helvetica-Bold').text('TRAINEE & PLACEMENT DETAILS');
    doc.moveDown(0.4);
    doc.fontSize(10).font('Helvetica');
    doc.text(`Trainee Name: ${placement.student.name}`);
    doc.text(`Matriculation No: ${placement.student.matric_no || 'N/A'}`);
    doc.text(`Host Organization: ${placement.company_name}`);
    doc.text(`Company Address: ${placement.company_address || 'N/A'}`);
    doc.text(`Industry Supervisor: ${placement.ind_supervisor_name || 'Assigned Supervisor'} (${placement.ind_supervisor_email || 'N/A'})`);
    doc.text(`Institutional Coordinator: ${placement.inst_coordinator?.name || 'Departmental Desk'}`);
    doc.moveDown(1.5);

    // Institutional Clearance & Grade
    doc.fontSize(12).font('Helvetica-Bold').text('INSTITUTIONAL EVALUATION & CLEARANCE');
    doc.moveDown(0.4);
    doc.fontSize(10).font('Helvetica');
    doc.text(`Clearance Status: ${placement.clearance.coordinator_status}`);
    doc.text(`Performance Score: ${placement.clearance.coordinator_score ?? 'N/A'} / 100`);
    doc.text(`Remarks: ${placement.clearance.coordinator_remarks || 'None'}`);
    doc.text(`Verification Seal Hash: ${placement.clearance.final_pdf_hash || 'N/A'}`);
    doc.moveDown(1.5);

    // Weekly Logs Summary
    doc.fontSize(12).font('Helvetica-Bold').text('WEEKLY LOGBOOK SUBMISSIONS');
    doc.moveDown(0.5);

    if (placement.weekly_submissions.length === 0) {
      doc.fontSize(10).font('Helvetica-Oblique').text('No weekly entries recorded.');
    } else {
      for (const week of placement.weekly_submissions) {
        doc.fontSize(10).font('Helvetica-Bold').text(`Week ${week.week_no} - Status: ${week.status}`);
        if (week.supervisor_remarks) {
          doc.fontSize(9).font('Helvetica-Oblique').text(`Supervisor Remarks: ${week.supervisor_remarks}`);
        }

        doc.fontSize(9).font('Helvetica');
        for (const log of week.daily_logs) {
          const dateStr = new Date(log.log_date).toLocaleDateString('en-GB');
          doc.text(` • ${log.day_of_week} (${dateStr}): ${log.description}`);
        }
        doc.moveDown(0.8);
      }
    }

    // End PDF stream
    doc.end();
  } catch (error) {
    next(error);
  }
}