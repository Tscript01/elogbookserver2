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
};

function formatDate(date: Date | string) {
  return new Date(date).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
}

function formatDay(date: Date | string) {
  return new Date(date).toLocaleDateString('en-US', {
    weekday: 'long',
  });
}

function addPageHeader(doc: PDFKit.PDFDocument) {
  doc
    .font('Helvetica')
    .fontSize(7)
    .fillColor(COLORS.muted)
    .text(
      'SIWES ELECTRONIC LOGBOOK',
      MARGIN,
      20,
      {
        width: CONTENT_WIDTH,
        align: 'left',
      }
    );

  doc
    .fontSize(7)
    .text(
      'STUDENT INDUSTRIAL WORK EXPERIENCE SCHEME',
      MARGIN,
      20,
      {
        width: CONTENT_WIDTH,
        align: 'right',
      }
    );
}

function addPageNumber(
  doc: PDFKit.PDFDocument,
  pageNumber: number
) {
  doc
    .font('Helvetica')
    .fontSize(8)
    .fillColor(COLORS.muted)
    .text(
      `Page ${pageNumber}`,
      MARGIN,
      PAGE_HEIGHT - 25,
      {
        width: CONTENT_WIDTH,
        align: 'center',
      }
    );
}

function ensureSpace(
  doc: PDFKit.PDFDocument,
  requiredHeight: number
) {
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
      .fillAndStroke(
        options?.background || COLORS.white,
        COLORS.border
      );

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

export const downloadLogbookPDF = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const userId = req.user?.id;
    const userRole = req.user?.role;

    const requestedStudentId = (
      req.params?.studentId ||
      req.query?.studentId ||
      userId
    ) as string;

    if (!userId) {
      res.status(401).json({
        error: 'Unauthorized',
      });
      return;
    }

    if (
      userRole === 'STUDENT' &&
      requestedStudentId !== userId
    ) {
      res.status(403).json({
        error: 'Forbidden: You can only download your own logbook',
      });
      return;
    }

    // --------------------------------------------------
    // STUDENT
    // --------------------------------------------------

    const student = await prisma.user.findUnique({
      where: {
        id: requestedStudentId,
      },
      select: {
        id: true,
        name: true,
        email: true,
        matric_no: true,
        department: true,
      },
    });

    if (!student) {
      res.status(404).json({
        error: 'Student record not found',
      });
      return;
    }

    // --------------------------------------------------
    // PLACEMENT
    // --------------------------------------------------

    const placement = await prisma.placement.findFirst({
      where: {
        student_id: requestedStudentId,
      },
      include: {
        ind_supervisor: {
          select: {
            name: true,
            email: true,
          },
        },

        inst_coordinator: {
          select: {
            name: true,
            email: true,
          },
        },
      },
    });

    if (!placement) {
      res.status(404).json({
        error: 'No active placement found for this student',
      });
      return;
    }

    // --------------------------------------------------
    // DAILY LOGS
    // --------------------------------------------------

    const dailyLogs = await prisma.dailyLog.findMany({
      where: {
        placement_id: placement.id,
      },
      orderBy: [
        {
          week_no: 'asc',
        },
        {
          log_date: 'asc',
        },
      ],
    });

    // --------------------------------------------------
    // WEEKLY SUBMISSIONS
    // --------------------------------------------------

    const weeklySubmissions =
      await prisma.weeklySubmission.findMany({
        where: {
          placement_id: placement.id,
        },
        orderBy: {
          week_no: 'asc',
        },
      });

    // --------------------------------------------------
    // PDF
    // --------------------------------------------------

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

    const sanitizedMatric = (
      student.matric_no || 'Trainee'
    ).replace(/[^a-zA-Z0-9]/g, '_');

    const filename =
      `SIWES_Logbook_${sanitizedMatric}.pdf`;

    res.setHeader(
      'Content-Type',
      'application/pdf'
    );

    res.setHeader(
      'Content-Disposition',
      `attachment; filename="${filename}"`
    );

    doc.pipe(res);

    // ==================================================
    // COVER / STUDENT INFORMATION
    // ==================================================

    doc.moveDown(1);

    doc
      .font('Helvetica-Bold')
      .fontSize(18)
      .fillColor(COLORS.navy)
      .text(
        'INDUSTRIAL TRAINING FUND',
        {
          align: 'center',
        }
      );

    doc
      .fontSize(13)
      .fillColor(COLORS.dark)
      .text(
        'STUDENTS INDUSTRIAL WORK EXPERIENCE SCHEME',
        {
          align: 'center',
        }
      );

    doc
      .fontSize(16)
      .fillColor(COLORS.navy)
      .text(
        'SIWES FORM 8',
        {
          align: 'center',
        }
      );

    doc
      .fontSize(10)
      .fillColor(COLORS.muted)
      .text(
        'STUDENT INDUSTRIAL TRAINING LOGBOOK',
        {
          align: 'center',
        }
      );

    doc.moveDown(1.5);

    // Student information heading
    doc
      .font('Helvetica-Bold')
      .fontSize(11)
      .fillColor(COLORS.dark)
      .text('STUDENT / PLACEMENT INFORMATION');

    doc.moveDown(0.5);

    const infoRows = [
      [
        'Student Name',
        student.name || 'N/A',
      ],
      [
        'Matric / Reg. Number',
        student.matric_no || 'N/A',
      ],
      [
        'Department',
        student.department || 'N/A',
      ],
      [
        'Organization',
        placement.company_name || 'N/A',
      ],
      [
        'Organization Address',
        placement.company_address || 'N/A',
      ],
      [
        'Industrial Supervisor',
        placement.ind_supervisor?.name ||
          'Not Assigned',
      ],
      [
        'Institution Coordinator',
        placement.inst_coordinator?.name ||
          'Not Assigned',
      ],
      [
        'Commencement Date',
        formatDate(placement.start_date),
      ],
      [
        'Completion Date',
        formatDate(placement.end_date),
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

    const weeks = new Map<
      number,
      typeof dailyLogs
    >();

    for (const log of dailyLogs) {
      if (!weeks.has(log.week_no)) {
        weeks.set(log.week_no, []);
      }

      weeks.get(log.week_no)!.push(log);
    }

    const sortedWeeks = [...weeks.keys()].sort(
      (a, b) => a - b
    );

    for (const weekNo of sortedWeeks) {
      const logs = weeks.get(weekNo) || [];

      ensureSpace(doc, 100);

      // WEEK TITLE
      doc
        .font('Helvetica-Bold')
        .fontSize(13)
        .fillColor(COLORS.navy)
        .text(
          `WEEK ${weekNo}`,
          MARGIN,
          doc.y,
          {
            underline: true,
          }
        );

      doc.moveDown(0.7);

      // TABLE HEADER
      const dateWidth = 75;
      const dayWidth = 80;
      const activityWidth =
        CONTENT_WIDTH -
        dateWidth -
        dayWidth;

      const tableWidths = [
        dateWidth,
        dayWidth,
        activityWidth,
      ];

      const headerHeight = 28;

      drawTableRow(
        doc,
        MARGIN,
        doc.y,
        tableWidths,
        headerHeight,
        [
          'DATE',
          'DAY',
          'WORK DONE / ACTIVITIES',
        ],
        {
          bold: true,
          background: COLORS.weekBg,
          fontSize: 8,
        }
      );

      doc.y += headerHeight;

      // DAILY LOGS
      for (const log of logs) {
        const description =
          log.description || '';

        // Calculate row height based on description
        const activityHeight =
          Math.max(
            45,
            Math.min(
              100,
              20 +
                Math.ceil(
                  description.length / 75
                ) *
                  10
            )
          );

        if (
          doc.y + activityHeight >
          PAGE_HEIGHT - 70
        ) {
          doc.addPage();

          addPageHeader(doc);

          doc.y = 50;

          // Repeat table header
          drawTableRow(
            doc,
            MARGIN,
            doc.y,
            tableWidths,
            headerHeight,
            [
              'DATE',
              'DAY',
              'WORK DONE / ACTIVITIES',
            ],
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
          [
            formatDate(log.log_date),
            formatDay(log.log_date),
            description,
          ],
          {
            fontSize: 8,
          }
        );

        doc.y += activityHeight;
      }

      doc.moveDown(0.8);

      // ==================================================
      // SUPERVISOR REMARKS
      // ==================================================

      const submission =
        weeklySubmissions.find(
          (item: { week_no: number; }) =>
            item.week_no === weekNo
        );

      ensureSpace(doc, 140);

      doc
        .font('Helvetica-Bold')
        .fontSize(9)
        .fillColor(COLORS.dark)
        .text(
          "SUPERVISOR'S WEEKLY REMARKS"
        );

      doc.moveDown(0.3);

      const remarksY = doc.y;

      doc
        .rect(
          MARGIN,
          remarksY,
          CONTENT_WIDTH,
          65
        )
        .stroke(COLORS.border);

      if (
        submission?.supervisor_comments
      ) {
        doc
          .font('Helvetica')
          .fontSize(8)
          .fillColor(COLORS.text)
          .text(
            submission.supervisor_comments,
            MARGIN + 8,
            remarksY + 8,
            {
              width:
                CONTENT_WIDTH - 16,
              height: 50,
            }
          );
      }

      doc.y = remarksY + 75;

      // SIGNATURE
      doc
        .font('Helvetica')
        .fontSize(8)
        .fillColor(COLORS.dark)
        .text(
          `Supervisor: ${
            placement.ind_supervisor?.name ||
            '____________________________'
          }`
        );

      doc.moveDown(0.5);

      doc.text(
        'Signature: ____________________________    Date: __________________'
      );

      doc.moveDown(1.5);
    }

    // ==================================================
    // FINAL SIGN-OFF
    // ==================================================

    ensureSpace(doc, 220);

    doc
      .font('Helvetica-Bold')
      .fontSize(12)
      .fillColor(COLORS.navy)
      .text(
        'FINAL SUPERVISORY CERTIFICATION',
        {
          align: 'center',
        }
      );

    doc.moveDown(1);

    doc
      .font('Helvetica')
      .fontSize(9)
      .fillColor(COLORS.text)
      .text(
        'This is to certify that the above records represent the activities undertaken by the student during the period of industrial training.'
      );

    doc.moveDown(2);

    doc.text(
      `Industrial Supervisor: ${
        placement.ind_supervisor?.name ||
        '________________________________'
      }`
    );

    doc.moveDown(1);

    doc.text(
      'Signature: _________________________________'
    );

    doc.moveDown(1);

    doc.text(
      'Date: ______________________________________'
    );

    doc.moveDown(2);

    doc.text(
      `Institution Coordinator: ${
        placement.inst_coordinator?.name ||
        '________________________________'
      }`
    );

    doc.moveDown(1);

    doc.text(
      'Signature: _________________________________'
    );

    doc.moveDown(1);

    doc.text(
      'Date: ______________________________________'
    );

    // ==================================================
    // PAGE NUMBERS
    // ==================================================

    const range = doc.bufferedPageRange();

    for (
      let i = range.start;
      i < range.start + range.count;
      i++
    ) {
      doc.switchToPage(i);
      addPageNumber(doc, i - range.start + 1);
    }

    doc.end();
  } catch (error) {
    next(error);
  }
};