import { Response, NextFunction } from 'express';
import PDFDocument from 'pdfkit';
import { prisma } from '../config/prisma';
import { AuthenticatedRequest } from '../middlewares/auth';

const PAGE_WIDTH = 595.28;
const PAGE_HEIGHT = 841.89;

const MARGIN = 40;
const CONTENT_WIDTH = PAGE_WIDTH - MARGIN * 2;

const COLORS = {
  navy: '#1e3a8a',
  dark: '#0f172a',
  text: '#334155',
  muted: '#64748b',
  border: '#94a3b8',
  lightBorder: '#cbd5e1',
  lightBg: '#f8fafc',
  weekBg: '#eff6ff',
  white: '#ffffff',
  stampGreen: '#065f46',
  stampBlue: '#1e40af',
  stampAmber: '#b45309',
};

function formatDate(date: Date | string | null | undefined): string {
  if (!date) return 'N/A';
  return new Date(date).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
}

function formatDay(date: Date | string | null | undefined): string {
  if (!date) return '';
  return new Date(date).toLocaleDateString('en-US', {
    weekday: 'long',
    timeZone: 'UTC',
  });
}

function addPageHeader(doc: PDFKit.PDFDocument) {
  doc
    .font('Helvetica')
    .fontSize(7)
    .fillColor(COLORS.muted)
    .text('SIWES ELECTRONIC LOGBOOK', MARGIN, 20, {
      width: CONTENT_WIDTH,
      align: 'left',
    });

  doc
    .fontSize(7)
    .text('STUDENT INDUSTRIAL WORK EXPERIENCE SCHEME', MARGIN, 20, {
      width: CONTENT_WIDTH,
      align: 'right',
    });
}

function addPageNumber(doc: PDFKit.PDFDocument, pageNumber: number) {
  doc
    .font('Helvetica')
    .fontSize(8)
    .fillColor(COLORS.muted)
    .text(`Page ${pageNumber}`, MARGIN, PAGE_HEIGHT - 25, {
      width: CONTENT_WIDTH,
      align: 'center',
    });
}

function ensureSpace(doc: PDFKit.PDFDocument, requiredHeight: number): boolean {
  if (doc.y + requiredHeight > PAGE_HEIGHT - 55) {
    doc.addPage();
    addPageHeader(doc);
    doc.y = 45;
    return true;
  }
  return false;
}

function drawTableRow(
  doc: PDFKit.PDFDocument,
  x: number,
  y: number,
  widths: number[],
  height: number,
  values: string[],
  options?: {
    bold?: boolean;
    background?: string;
    fontSize?: number;
  }
) {
  let currentX = x;

  values.forEach((value, index) => {
    const width = widths[index];

    doc
      .rect(currentX, y, width, height)
      .fillAndStroke(options?.background || COLORS.white, COLORS.border);

    doc
      .font(options?.bold ? 'Helvetica-Bold' : 'Helvetica')
      .fontSize(options?.fontSize || 8)
      .fillColor(COLORS.dark)
      .text(value || '', currentX + 5, y + 5, {
        width: width - 10,
        height: height - 10,
        align: 'left',
      });

    currentX += width;
  });
}

function drawInstitutionCoordinatorStamp(
  doc: PDFKit.PDFDocument,
  x: number,
  y: number,
  coordinatorName: string,
  score: number | null,
  clearanceDate: string
) {
  doc.save();
  doc.rotate(2, { origin: [x, y] });

  doc.circle(x, y, 40).lineWidth(1.8).strokeColor(COLORS.stampBlue).stroke();
  doc.circle(x, y, 36).lineWidth(0.8).strokeColor(COLORS.stampBlue).stroke();
  doc.circle(x, y, 31).lineWidth(0.5).strokeColor(COLORS.stampBlue).dash(2, { space: 2 }).stroke();
  doc.undash();

  doc.fillColor(COLORS.stampBlue);
  doc.fontSize(4.5).font('Helvetica-Bold');
  doc.text('SIWES COORDINATING UNIT', x - 30, y - 24, { width: 60, align: 'center' });
  doc.text('INSTITUTIONAL CLEARANCE', x - 30, y - 18, { width: 60, align: 'center' });

  doc.fontSize(7.5);
  doc.text('PASSED & CLEARED', x - 30, y - 5, { width: 60, align: 'center' });

  doc.fontSize(4.5).font('Helvetica');
  doc.text(coordinatorName.slice(0, 18), x - 30, y + 6, { width: 60, align: 'center' });

  if (score !== null && score !== undefined) {
    doc.text(`SCORE: ${score}%`, x - 30, y + 13, { width: 60, align: 'center' });
  } else {
    doc.text('EVALUATED & APPROVED', x - 30, y + 13, { width: 60, align: 'center' });
  }

  doc.text(clearanceDate, x - 30, y + 20, { width: 60, align: 'center' });

  doc.restore();
}

function drawItfDirectorateStamp(
  doc: PDFKit.PDFDocument,
  x: number,
  y: number,
  officialName: string,
  stampHash: string,
  clearanceDate: string
) {
  doc.save();
  doc.rotate(-3, { origin: [x, y] });

  doc.circle(x, y, 40).lineWidth(1.8).strokeColor(COLORS.stampGreen).stroke();
  doc.circle(x, y, 36).lineWidth(0.8).strokeColor(COLORS.stampGreen).stroke();
  doc.circle(x, y, 31).lineWidth(0.5).strokeColor(COLORS.stampGreen).dash(2, { space: 2 }).stroke();
  doc.undash();

  doc.fillColor(COLORS.stampGreen);
  doc.fontSize(4.5).font('Helvetica-Bold');
  doc.text('FEDERAL REPUBLIC OF NIGERIA', x - 30, y - 24, { width: 60, align: 'center' });
  doc.text('INDUSTRIAL TRAINING FUND', x - 30, y - 18, { width: 60, align: 'center' });

  doc.fontSize(7.5);
  doc.text('LOGBOOK VERIFIED', x - 30, y - 5, { width: 60, align: 'center' });

  doc.fontSize(4.5).font('Helvetica');
  doc.text(officialName.slice(0, 18), x - 30, y + 6, { width: 60, align: 'center' });
  doc.text(`HASH: ${stampHash}`, x - 30, y + 13, { width: 60, align: 'center' });
  doc.text(clearanceDate, x - 30, y + 20, { width: 60, align: 'center' });

  doc.restore();
}

export const downloadLogbookPDF = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const userId = req.user?.id;
    const userRole = req.user?.role;
    const targetPlacementId = req.query?.placementId as string | undefined;
    const requestedStudentId = (req.params?.studentId ||
      req.query?.studentId ||
      userId) as string;

    if (!userId) {
      res.status(401).json({ error: 'Unauthorized' });
      return;
    }

    if (
      userRole === 'STUDENT' &&
      !targetPlacementId &&
      requestedStudentId !== userId
    ) {
      res.status(403).json({
        error: 'Forbidden: You can only download your own logbook',
      });
      return;
    }

    const placementInclude = {
      student: {
        select: {
          id: true,
          name: true,
          email: true,
          matric_no: true,
          department: true,
        },
      },
      ind_supervisor: {
        select: { name: true, email: true },
      },
      inst_coordinator: {
        select: { name: true, email: true },
      },
      clearance: {
        include: {
          itf_official: {
            select: { name: true, email: true },
          },
        },
      },
    };

    let placement = null;

    if (targetPlacementId) {
      placement = await prisma.placement.findUnique({
        where: { id: targetPlacementId },
        include: placementInclude,
      });
    } else {
      placement = await prisma.placement.findFirst({
        where: { student_id: requestedStudentId },
        include: placementInclude,
      });
    }

    if (!placement || !placement.student) {
      res.status(404).json({
        error: 'No active placement or student record found',
      });
      return;
    }

    const student = placement.student;

    const coordinatorStatusRaw = String(
      placement.clearance?.coordinator_status || ''
    ).toUpperCase();

    const isCoordinatorCleared =
      coordinatorStatusRaw === 'CLEARED' ||
      coordinatorStatusRaw === 'APPROVED' ||
      Boolean(placement.clearance?.coordinator_cleared_at) ||
      Boolean(placement.clearance?.coordinator_signature);

    const itfStatusRaw = String(
      placement.clearance?.itf_status || ''
    ).toUpperCase();

    const isItfCleared =
      (itfStatusRaw === 'CLEARED' || itfStatusRaw === 'APPROVED') &&
      Boolean(placement.clearance?.itf_cleared_at || placement.clearance?.itf_stamp_hash);

    const dailyLogs = await prisma.dailyLog.findMany({
      where: { placement_id: placement.id },
      orderBy: [{ week_no: 'asc' }, { log_date: 'asc' }],
    });

    const weeklySubmissions = await prisma.weeklySubmission.findMany({
      where: { placement_id: placement.id },
      orderBy: { week_no: 'asc' },
    });

    const doc = new PDFDocument({
      size: 'A4',
      margins: {
        top: 45,
        bottom: 45,
        left: MARGIN,
        right: MARGIN,
      },
      bufferPages: true,
    });

    const sanitizedMatric = (student.matric_no || 'Trainee').replace(
      /[^a-zA-Z0-9]/g,
      '_'
    );
    const filename = `SIWES_Logbook_${sanitizedMatric}.pdf`;

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);

    doc.pipe(res);

    // ==================================================
    // COVER / STUDENT INFORMATION
    // ==================================================

    doc.moveDown(1);

    doc
      .font('Helvetica-Bold')
      .fontSize(18)
      .fillColor(COLORS.navy)
      .text('INDUSTRIAL TRAINING FUND', {
        align: 'center',
      });

    doc
      .fontSize(13)
      .fillColor(COLORS.dark)
      .text('STUDENTS INDUSTRIAL WORK EXPERIENCE SCHEME', {
        align: 'center',
      });

    doc
      .fontSize(16)
      .fillColor(COLORS.navy)
      .text('SIWES ELECTRONIC LOGBOOK', {
        align: 'center',
      });

    doc
      .fontSize(10)
      .fillColor(COLORS.muted)
      .text('OFFICIAL RECORD OF TECHNICAL TRAINING', {
        align: 'center',
      });

    doc.moveDown(1.5);

    doc
      .font('Helvetica-Bold')
      .fontSize(11)
      .fillColor(COLORS.dark)
      .text('STUDENT / PLACEMENT INFORMATION');

    doc.moveDown(0.5);

    const infoRows = [
      ['Student Name', student.name || 'N/A'],
      ['Matric / Reg. Number', student.matric_no || 'N/A'],
      ['Department', student.department || 'N/A'],
      ['Organization', placement.company_name || 'N/A'],
      ['Organization Address', placement.company_address || 'N/A'],
      [
        'Industrial Supervisor',
        placement.ind_supervisor_name ||
          placement.ind_supervisor?.name ||
          'Not Assigned',
      ],
      [
        'Institution Coordinator',
        placement.inst_coordinator?.name || 'Not Assigned',
      ],
      ['Commencement Date', formatDate(placement.start_date)],
      ['Completion Date', formatDate(placement.end_date)],
      [
        'Institutional Clearance',
        isCoordinatorCleared
          ? `CLEARED (${placement.clearance?.coordinator_score ? placement.clearance.coordinator_score + '%' : 'APPROVED'})`
          : 'PENDING COORDINATOR EVALUATION',
      ],
      [
        'ITF Directorate Status',
        isItfCleared
          ? 'OFFICIALLY VERIFIED & STAMPED'
          : 'PENDING ZONAL REVIEW',
      ],
    ];

    const infoWidths = [170, CONTENT_WIDTH - 170];

    for (const row of infoRows) {
      const valueHeight = 25;

      drawTableRow(
        doc,
        MARGIN,
        doc.y,
        infoWidths,
        valueHeight,
        row
      );

      doc.y += valueHeight;
    }

    doc.moveDown(1.5);

    // ==================================================
    // WEEKLY LOGS
    // ==================================================

    const weeks = new Map<number, typeof dailyLogs>();

    for (const log of dailyLogs) {
      if (!weeks.has(log.week_no)) {
        weeks.set(log.week_no, []);
      }
      weeks.get(log.week_no)!.push(log);
    }

    const submissionWeekNumbers = weeklySubmissions.map((s: { week_no: any; }) => s.week_no);
    const allWeekNumbers = Array.from(
      new Set([...weeks.keys(), ...submissionWeekNumbers])
    ).sort((a, b) => a - b);

    for (const weekNo of allWeekNumbers) {
      const logs = weeks.get(weekNo) || [];

      ensureSpace(doc, 140);

      doc
        .font('Helvetica-Bold')
        .fontSize(13)
        .fillColor(COLORS.navy)
        .text(`WEEK ${weekNo}`, MARGIN, doc.y, {
          underline: true,
        });

      doc.moveDown(0.7);

      const dateWidth = 75;
      const dayWidth = 80;
      const activityWidth = CONTENT_WIDTH - dateWidth - dayWidth;

      const tableWidths = [dateWidth, dayWidth, activityWidth];
      const headerHeight = 28;

      drawTableRow(
        doc,
        MARGIN,
        doc.y,
        tableWidths,
        headerHeight,
        ['DATE', 'DAY', 'WORK DONE / ACTIVITIES'],
        {
          bold: true,
          background: COLORS.weekBg,
          fontSize: 8,
        }
      );

      doc.y += headerHeight;

      if (logs.length === 0) {
        drawTableRow(
          doc,
          MARGIN,
          doc.y,
          tableWidths,
          30,
          ['--', '--', 'No daily technical entries logged for this week.'],
          { fontSize: 8 }
        );
        doc.y += 30;
      } else {
        for (const log of logs) {
          const description = log.description || '';

          const activityHeight = Math.max(
            45,
            Math.min(
              100,
              20 + Math.ceil(description.length / 75) * 10
            )
          );

          if (doc.y + activityHeight > PAGE_HEIGHT - 70) {
            doc.addPage();
            addPageHeader(doc);
            doc.y = 50;

            drawTableRow(
              doc,
              MARGIN,
              doc.y,
              tableWidths,
              headerHeight,
              ['DATE', 'DAY', 'WORK DONE / ACTIVITIES'],
              {
                bold: true,
                background: COLORS.weekBg,
                fontSize: 8,
              }
            );

            doc.y += headerHeight;
          }

          drawTableRow(
            doc,
            MARGIN,
            doc.y,
            tableWidths,
            activityHeight,
            [formatDate(log.log_date), formatDay(log.log_date), description],
            {
              fontSize: 8,
            }
          );

          doc.y += activityHeight;
        }
      }

      doc.moveDown(0.8);

      // Weekly Remarks
      const submission = weeklySubmissions.find(
        (item: { week_no: number }) => item.week_no === weekNo
      );

      ensureSpace(doc, 130);

      doc
        .font('Helvetica-Bold')
        .fontSize(9)
        .fillColor(COLORS.dark)
        .text(`SUPERVISOR'S REMARKS - WEEK ${weekNo}`);

      doc.moveDown(0.3);

      const remarksY = doc.y;

      doc
        .rect(MARGIN, remarksY, CONTENT_WIDTH, 60)
        .fillAndStroke(COLORS.lightBg, COLORS.border);

      const isWeekApproved =
        submission?.status &&
        ['APPROVED', 'SIGNED', 'VERIFIED'].includes(
          String(submission.status).toUpperCase()
        );

      const commentsText =
        submission?.supervisor_comments ||
        'No remarks recorded by supervisor for this week.';

      doc
        .font('Helvetica')
        .fontSize(8)
        .fillColor(COLORS.text)
        .text(commentsText, MARGIN + 8, remarksY + 8, {
          width: CONTENT_WIDTH - (isWeekApproved ? 120 : 16),
          height: 44,
        });

      if (isWeekApproved) {
        doc.save();
        doc
          .rect(MARGIN + CONTENT_WIDTH - 105, remarksY + 10, 95, 40)
          .fillAndStroke('#ecfdf5', COLORS.stampGreen);
        doc
          .font('Helvetica-Bold')
          .fontSize(8)
          .fillColor(COLORS.stampGreen)
          .text('VERIFIED', MARGIN + CONTENT_WIDTH - 100, remarksY + 18, {
            width: 85,
            align: 'center',
          });
        doc
          .font('Helvetica')
          .fontSize(6)
          .text('WEEK APPROVED', MARGIN + CONTENT_WIDTH - 100, remarksY + 30, {
            width: 85,
            align: 'center',
          });
        doc.restore();
      }

      doc.y = remarksY + 68;

      doc
        .font('Helvetica')
        .fontSize(8)
        .fillColor(COLORS.dark)
        .text(
          `Supervisor: ${
            placement.ind_supervisor_name ||
            placement.ind_supervisor?.name ||
            '____________________________'
          }`
        );

      doc.moveDown(0.4);

      doc.text(
        `Signature: ____________________________    Date: ${
          submission?.updated_at ? formatDate(submission.updated_at) : '__________________'
        }`
      );

      doc.moveDown(1.5);
    }

    // ==================================================
    // FINAL SIGN-OFF & HORIZONTAL DUAL STAMPS
    // ==================================================

    ensureSpace(doc, 200);

    doc
      .font('Helvetica-Bold')
      .fontSize(12)
      .fillColor(COLORS.navy)
      .text('FINAL SUPERVISORY & ACCREDITATION CERTIFICATION', {
        align: 'center',
      });

    doc.moveDown(0.8);

    doc
      .font('Helvetica')
      .fontSize(8.5)
      .fillColor(COLORS.text)
      .text(
        'This is to certify that the entries above represent verified technical activities completed by the student during the approved period of industrial attachment, evaluated by the designated institutional authority and certified by the Industrial Training Fund.'
      );

    doc.moveDown(1.5);

    const signoffStartY = doc.y;

    // LEFT COLUMN: Signatures & Information (Width: 290pt)
    const textColWidth = 285;

    doc.font('Helvetica-Bold').fontSize(8.5).fillColor(COLORS.dark);
    doc.text('Industry Supervisor:', MARGIN, signoffStartY);
    doc.font('Helvetica').fontSize(8.5).fillColor(COLORS.text);
    doc.text(
      placement.ind_supervisor_name || placement.ind_supervisor?.name || '________________________________',
      MARGIN + 105,
      signoffStartY,
      { width: textColWidth - 105 }
    );

    doc.text('Signature: ______________________    Date: __________________', MARGIN, signoffStartY + 16);

    doc.font('Helvetica-Bold').fontSize(8.5).fillColor(COLORS.dark);
    doc.text('Institution Coordinator:', MARGIN, signoffStartY + 42);
    doc.font('Helvetica').fontSize(8.5).fillColor(COLORS.text);
    doc.text(
      placement.inst_coordinator?.name || '________________________________',
      MARGIN + 105,
      signoffStartY + 42,
      { width: textColWidth - 105 }
    );

    const coordSig = placement.clearance?.coordinator_signature ? 'DIGITALLY ENDORSED' : '______________________';
    const coordDate = placement.clearance?.coordinator_cleared_at
      ? formatDate(placement.clearance.coordinator_cleared_at)
      : '__________________';

    doc.text(`Signature: ${coordSig}    Date: ${coordDate}`, MARGIN, signoffStartY + 58);

    // RIGHT SIDE: Side-by-Side Dual Stamps (Horizontal Placement)
    // Centers: stamp1 (Coordinator) around X = 390, stamp2 (ITF) around X = 490
    const stamp1X = MARGIN + CONTENT_WIDTH - 155;
    const stamp2X = MARGIN + CONTENT_WIDTH - 55;
    const stampCenterY = signoffStartY + 40;

    // 1. Institution Coordinator Stamp
    if (isCoordinatorCleared) {
      const coordinatorName =
        placement.inst_coordinator?.name ||
        placement.clearance?.coordinator_signature ||
        'Institution Coordinator';
      const coordinatorDate = placement.clearance?.coordinator_cleared_at
        ? formatDate(placement.clearance.coordinator_cleared_at)
        : formatDate(new Date());
      const scoreVal = placement.clearance?.coordinator_score ?? null;

      drawInstitutionCoordinatorStamp(
        doc,
        stamp1X,
        stampCenterY,
        coordinatorName,
        scoreVal,
        coordinatorDate
      );
    } else {
      doc.save();
      doc
        .rect(stamp1X - 44, signoffStartY, 88, 76)
        .fillAndStroke('#eff6ff', '#bfdbfe');
      doc
        .font('Helvetica-Bold')
        .fontSize(6.5)
        .fillColor(COLORS.stampBlue)
        .text('PENDING COORDINATOR', stamp1X - 40, signoffStartY + 26, {
          width: 80,
          align: 'center',
        });
      doc
        .font('Helvetica')
        .fontSize(5)
        .text('Awaiting academic clearance', stamp1X - 40, signoffStartY + 38, {
          width: 80,
          align: 'center',
        });
      doc.restore();
    }

    // 2. ITF Directorate Stamp
    if (isItfCleared) {
      const itfOfficialName =
        placement.clearance?.itf_official?.name || 'Zonal ITF Verifier';
      const itfStampHash =
        placement.clearance?.itf_stamp_hash || 'VERIFIED';
      const clearanceDate = placement.clearance?.itf_cleared_at
        ? formatDate(placement.clearance.itf_cleared_at)
        : formatDate(new Date());

      drawItfDirectorateStamp(
        doc,
        stamp2X,
        stampCenterY,
        itfOfficialName,
        itfStampHash,
        clearanceDate
      );
    } else {
      doc.save();
      doc
        .rect(stamp2X - 44, signoffStartY, 88, 76)
        .fillAndStroke('#fffbeb', '#fcd34d');
      doc
        .font('Helvetica-Bold')
        .fontSize(6.5)
        .fillColor(COLORS.stampAmber)
        .text('PENDING ITF SEAL', stamp2X - 40, signoffStartY + 26, {
          width: 80,
          align: 'center',
        });
      doc
        .font('Helvetica')
        .fontSize(5)
        .text('Awaiting Zonal review', stamp2X - 40, signoffStartY + 38, {
          width: 80,
          align: 'center',
        });
      doc.restore();
    }

    // Advance doc.y past the entire horizontal block
    doc.y = signoffStartY + 95;

    // ==================================================
    // PAGE NUMBERS
    // ==================================================

    const range = doc.bufferedPageRange();

    for (let i = range.start; i < range.start + range.count; i++) {
      doc.switchToPage(i);
      addPageNumber(doc, i - range.start + 1);
    }

    doc.end();
  } catch (error) {
    next(error);
  }
};