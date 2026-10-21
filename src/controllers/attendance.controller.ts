import type { Request, Response, NextFunction } from 'express';
import { prisma } from '../config/prisma';
import type { AuthenticatedRequest } from '../middlewares/auth';
import { BadRequestError, ForbiddenError, NotFoundError } from '../utils/errors';
import { verifyPresenceTelemetry } from '../utils/geofence';
import { PresenceStatus } from '../generated/prisma';

export async function checkInToday(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const studentId = req.user?.id;
    if (!studentId) {
      throw new ForbiddenError('Student authentication required');
    }

    const { latitude, longitude, accuracy, isMocked, capturedAt } = req.body;

    const now = new Date();
    
    // SIWES operates Monday (1) to Saturday (6)
    if (now.getUTCDay() === 0) {
      throw new BadRequestError('Attendance check-ins are not recorded on Sundays.');
    }

    const todayDate = new Date(now.getTime());
    todayDate.setUTCHours(0, 0, 0, 0);

    const placement = await prisma.placement.findFirst({
      where: { student_id: studentId },
    });

    if (!placement) {
      throw new NotFoundError('No active placement found for this student');
    }

    const placementStart = new Date(placement.start_date);
    const placementEnd = new Date(placement.end_date);
    placementEnd.setUTCHours(23, 59, 59, 999);

    if (now.getTime() < placementStart.getTime()) {
      throw new BadRequestError('Your placement has not started yet.');
    }

    if (now.getTime() > placementEnd.getTime()) {
      throw new ForbiddenError('Your placement period has concluded.');
    }

    // Check if already checked in today
    const existingAttendance = await prisma.dailyAttendance.findUnique({
      where: {
        placement_id_attendance_date: {
          placement_id: placement.id,
          attendance_date: todayDate,
        },
      },
    });

    if (existingAttendance) {
      res.status(200).json({
        status: 'success',
        message: 'Already checked in for today',
        data: existingAttendance,
      });
      return;
    }

    // Geofence & Anti-Mock Telemetry Verification
    let presenceStatus: PresenceStatus = PresenceStatus.PENDING;
    let distanceMeters: number | null = null;
    let riskScore = 0;
    let flags: string[] = [];

    const hasCoords = latitude !== undefined && longitude !== undefined;
    const hasCompanyAnchor = placement.company_lat !== null && placement.company_lng !== null;

    if (hasCoords && hasCompanyAnchor) {
      const lastCheckIn = await prisma.dailyAttendance.findFirst({
        where: {
          placement_id: placement.id,
          submitted_lat: { not: null },
          submitted_lng: { not: null },
        },
        orderBy: { check_in_time: 'desc' },
      });

      const verification = verifyPresenceTelemetry({
        submittedLat: Number(latitude),
        submittedLng: Number(longitude),
        accuracy: Number(accuracy || 0),
        isMocked: Boolean(isMocked),
        companyLat: placement.company_lat!,
        companyLng: placement.company_lng!,
        geofenceRadiusM: placement.geofence_radius_m || 200,
        lastCheckIn: lastCheckIn?.submitted_lat && lastCheckIn?.submitted_lng
          ? {
              lat: lastCheckIn.submitted_lat,
              lng: lastCheckIn.submitted_lng,
              timestamp: lastCheckIn.check_in_time,
            }
          : null,
        currentTimestamp: capturedAt ? new Date(capturedAt) : now,
      });

      presenceStatus = verification.presenceStatus;
      distanceMeters = verification.distanceMeters;
      riskScore = verification.riskScore;
      flags = verification.flags;
    }

    const attendance = await prisma.dailyAttendance.create({
      data: {
        placement_id: placement.id,
        attendance_date: todayDate,
        check_in_time: capturedAt ? new Date(capturedAt) : now,
        submitted_lat: latitude !== undefined ? Number(latitude) : null,
        submitted_lng: longitude !== undefined ? Number(longitude) : null,
        accuracy_m: accuracy !== undefined ? Number(accuracy) : null,
        distance_m: distanceMeters !== null ? Number(distanceMeters) : null,
        presence_status: presenceStatus,
        is_mocked: Boolean(isMocked),
        risk_score: riskScore,
        verification_flags: flags,
        submitted_from_ip: req.ip || null,
      },
    });

    res.status(201).json({
      status: 'success',
      data: {
        attendance,
        verification: {
          presenceStatus,
          distanceMeters,
          riskScore,
          flags,
        },
      },
    });
  } catch (error) {
    next(error);
  }
}

export async function getTodayAttendanceStatus(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const studentId = req.user?.id;
    if (!studentId) {
      throw new ForbiddenError('Student authentication required');
    }

    const placement = await prisma.placement.findFirst({
      where: { student_id: studentId },
    });

    if (!placement) {
      throw new NotFoundError('Placement not found');
    }

    const todayDate = new Date();
    todayDate.setUTCHours(0, 0, 0, 0);

    const record = await prisma.dailyAttendance.findUnique({
      where: {
        placement_id_attendance_date: {
          placement_id: placement.id,
          attendance_date: todayDate,
        },
      },
    });

    res.status(200).json({
      status: 'success',
      data: {
        checkedIn: !!record,
        record: record || null,
      },
    });
  } catch (error) {
    next(error);
  }
}

export const getSupervisorWeeklyReview = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { token } = req.params;

    const tokenRecord = await prisma.verificationToken.findUnique({
      where: { token },
      include: {
        placement: {
          include: {
            student: { select: { id: true, name: true, matric_no: true, department: true } },
          },
        },
      },
    });

    if (!tokenRecord || tokenRecord.expires_at < new Date() || tokenRecord.is_used) {
      res.status(401).json({ error: "Invalid or expired review link" });
      return;
    }

    const { placement, week_no } = tokenRecord;

    // Fetch the weekly submission and daily logs for this week
    const submission = await prisma.weeklySubmission.findUnique({
      where: {
        placement_id_week_no: {
          placement_id: placement.id,
          week_no,
        },
      },
      include: {
        daily_logs: { orderBy: { log_date: "asc" } },
      },
    });

    // Calculate Monday to Saturday dates for this week
    const placementStart = new Date(placement.start_date);
    const startDay = placementStart.getUTCDay();
    const startOffset = startDay === 0 ? -6 : 1 - startDay;
    const baseMonday = new Date(placementStart.getTime());
    baseMonday.setUTCDate(baseMonday.getUTCDate() + startOffset);
    baseMonday.setUTCHours(0, 0, 0, 0);

    const weekMonday = new Date(baseMonday.getTime() + (week_no - 1) * 7 * 24 * 60 * 60 * 1000);
    const weekSaturday = new Date(weekMonday.getTime() + 6 * 24 * 60 * 60 * 1000 - 1);

    // Fetch the standalone attendance records for this week
    const attendances = await prisma.dailyAttendance.findMany({
      where: {
        placement_id: placement.id,
        attendance_date: {
          gte: weekMonday,
          lte: weekSaturday,
        },
      },
      orderBy: { attendance_date: "asc" },
    });

    res.json({
      success: true,
      placement: {
        company_name: placement.company_name,
        student: placement.student,
      },
      week_no,
      submission,
      attendances,
    });
  } catch (error) {
    next(error);
  }
};

export async function getPlacementAttendanceAudit(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const { placementId } = req.params;
    const userId = req.user?.id;
    const userRole = req.user?.role;

    const placement = await prisma.placement.findUnique({
      where: { id: placementId },
      include: {
        student: {
          select: { id: true, name: true, matric_no: true, department: true },
        },
        daily_attendance: {
          orderBy: { attendance_date: 'desc' },
        },
      },
    });

    if (!placement) {
      throw new NotFoundError('Placement record not found');
    }

    const isAuthorized =
      userRole === 'ADMIN' ||
      placement.inst_coordinator_id === userId ||
      placement.ind_supervisor_id === userId ||
      placement.student_id === userId;

    if (!isAuthorized) {
      throw new ForbiddenError('Unauthorized to inspect this attendance audit');
    }

    const companyLat = placement.company_lat;
    const companyLng = placement.company_lng;
    const baseRadius = placement.geofence_radius_m || 200;

    const auditRecords = placement.daily_attendance.map((record: { accuracy_m: number; distance_m: any; id: any; attendance_date: any; check_in_time: any; presence_status: any; submitted_lat: any; submitted_lng: any; is_mocked: any; risk_score: any; verification_flags: any; submitted_from_ip: any; }) => {
      const accuracy = record.accuracy_m || 0;
      const effectiveRadius = baseRadius + Math.min(accuracy, 100);
      const distance = record.distance_m;
      const marginMeters = distance !== null ? Math.round(distance - effectiveRadius) : null;

      return {
        id: record.id,
        date: record.attendance_date,
        checkInTime: record.check_in_time,
        presenceStatus: record.presence_status,
        telemetry: {
          studentCoords:
            record.submitted_lat && record.submitted_lng
              ? { lat: record.submitted_lat, lng: record.submitted_lng }
              : null,
          companyAnchor:
            companyLat && companyLng
              ? { lat: companyLat, lng: companyLng }
              : null,
          accuracyMeters: accuracy,
          computedDistanceMeters: distance,
          allowedThresholdMeters: effectiveRadius,
          marginMeters,
          isWithinGeofence: distance !== null ? distance <= effectiveRadius : false,
        },
        fraudAnalysis: {
          isMocked: record.is_mocked,
          riskScore: record.risk_score,
          flags: record.verification_flags,
          ipAddress: record.submitted_from_ip,
        },
      };
    });

    res.status(200).json({
      status: 'success',
      data: {
        placement: {
          id: placement.id,
          companyName: placement.company_name,
          companyAnchor:
            companyLat && companyLng ? { lat: companyLat, lng: companyLng } : null,
          baseRadiusMeters: baseRadius,
          student: placement.student,
        },
        records: auditRecords,
      },
    });
  } catch (error) {
    next(error);
  }
}