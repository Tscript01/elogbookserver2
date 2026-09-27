import { Response, NextFunction } from 'express';
import crypto from 'crypto';
import { prisma } from '../config/prisma';
import { AuthenticatedRequest } from '../middlewares/auth';

// 1. GET /api/itf/overview
export const getItfDashboardOverview = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  try {
    const userRole = req.user?.role;
    if (userRole !== 'ADMIN' && userRole !== 'INST_COORDINATOR' && userRole !== 'ITF_OFFICIAL') {
      return res.status(403).json({ error: 'Forbidden: Access restricted to ITF officials and administrators' });
    }

    const [
      totalStudents,
      totalPlacements,
      totalSubmissions,
      pendingClearances,
      completedClearances,
      allPlacements
    ] = await Promise.all([
      prisma.user.count({ where: { role: 'STUDENT' } }),
      prisma.placement.count(),
      prisma.weeklySubmission.count(),
      prisma.finalClearance.count({ where: { itf_status: 'PENDING' } }),
      prisma.finalClearance.count({ where: { itf_status: 'CLEARED' } }),
      prisma.placement.findMany({
        select: {
          id: true,
          state: true,
          city: true,
          company_name: true,
          ind_supervisor_id: true,
          start_date: true,
          student: {
            select: {
              id: true,
              name: true,
              matric_no: true,
              department: true,
            }
          },
          ind_supervisor: {
            select: {
              id: true,
              name: true,
              email: true,
            }
          },
          clearance: {
            select: {
              itf_status: true,
              itf_stamp_hash: true,
            }
          }
        },
        orderBy: { start_date: 'desc' }
      })
    ]);

    const zonalMap: Record<string, { state: string; studentCount: number; cities: Record<string, number> }> = {};

    for (const p of allPlacements) {
      const stateName = p.state || 'Unspecified';
      const cityName = p.city || 'Unspecified';

      if (!zonalMap[stateName]) {
        zonalMap[stateName] = {
          state: stateName,
          studentCount: 0,
          cities: {}
        };
      }
      zonalMap[stateName].studentCount += 1;
      zonalMap[stateName].cities[cityName] = (zonalMap[stateName].cities[cityName] || 0) + 1;
    }

    const zonalClusters = Object.values(zonalMap)
      .sort((a, b) => b.studentCount - a.studentCount)
      .map(z => ({
        state: z.state,
        studentCount: z.studentCount,
        cities: Object.entries(z.cities).map(([name, count]) => ({ name, count }))
      }));

    const unassignedSupervisorsCount = allPlacements.filter((p: { ind_supervisor_id: any; }) => !p.ind_supervisor_id).length;

    const recentPlacements = allPlacements.slice(0, 15).map((p: { id: any; student: { name: any; matric_no: any; department: any; }; company_name: any; city: any; state: any; ind_supervisor_id: any; ind_supervisor: { name: any; }; clearance: { itf_status: any; }; start_date: any; }) => ({
      id: p.id,
      studentName: p.student?.name || 'Trainee',
      matricNo: p.student?.matric_no || 'N/A',
      department: p.student?.department || 'N/A',
      companyName: p.company_name,
      location: `${p.city}, ${p.state}`,
      hasSupervisor: Boolean(p.ind_supervisor_id),
      supervisorName: p.ind_supervisor?.name || 'Unassigned',
      itfStatus: p.clearance?.itf_status || 'PENDING',
      registeredAt: p.start_date
    }));

    return res.status(200).json({
      summary: {
        totalStudents,
        totalPlacements,
        placementRate: totalStudents > 0 ? Math.round((totalPlacements / totalStudents) * 100) : 0,
        totalSubmissions,
        pendingClearances,
        completedClearances,
        unassignedSupervisorsCount
      },
      zonalClusters,
      recentPlacements
    });
  } catch (error) {
    next(error);
  }
};

// 2. GET /api/itf/students-export
export const getItfStudentsExportData = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  try {
    const userRole = req.user?.role;
    if (userRole !== 'ADMIN' && userRole !== 'INST_COORDINATOR' && userRole !== 'ITF_OFFICIAL') {
      return res.status(403).json({ error: 'Forbidden: Access restricted to authorized personnel' });
    }

    const stateFilter = req.query.state as string | undefined;

    const whereClause: any = {};
    if (stateFilter) {
      whereClause.state = stateFilter;
    }

    const placements = await prisma.placement.findMany({
      where: whereClause,
      include: {
        student: {
          select: { name: true, matric_no: true, email: true, department: true }
        },
        ind_supervisor: {
          select: { name: true, email: true }
        },
        clearance: {
          select: { itf_status: true, itf_stamp_hash: true, itf_cleared_at: true }
        }
      },
      orderBy: [{ state: 'asc' }, { city: 'asc' }]
    });

 const exportRows = placements.map((p: { id: any; student_id: any; student: { matric_no: any; name: any; department: any; }; company_name: any; state: any; city: any; company_address: any; ind_supervisor_name: any; ind_supervisor: { name: any; }; clearance: { itf_status: any; itf_stamp_hash: any; }; start_date: any; end_date: any; }) => ({
      placementId: p.id,
      studentId: p.student_id,
      matricNo: p.student?.matric_no || 'N/A',
      studentName: p.student?.name || 'N/A',
      department: p.student?.department || 'N/A',
      company: p.company_name,
      state: p.state,
      city: p.city,
      address: p.company_address || 'N/A',
      industrySupervisor: p.ind_supervisor_name || p.ind_supervisor?.name || 'Unassigned',
      itfStatus: p.clearance?.itf_status || 'PENDING',
      itfStampHash: p.clearance?.itf_stamp_hash || 'N/A',
      startDate: p.start_date,
      endDate: p.end_date
    }));
    return res.status(200).json({ records: exportRows });
  } catch (error) {
    next(error);
  }
};

// 3. POST /api/itf/clearance/:placementId/stamp
export const approveItfClearance = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  try {
    const itfOfficialId = req.user?.id;
    const userRole = req.user?.role;
    const { placementId } = req.params;

    if (userRole !== 'ITF_OFFICIAL' && userRole !== 'ADMIN') {
      return res.status(403).json({ error: 'Access denied: Requires ITF Official credentials' });
    }

    const placement = await prisma.placement.findUnique({
      where: { id: placementId },
      include: {
        student: { select: { id: true, matric_no: true } }
      }
    });

    if (!placement) {
      return res.status(404).json({ error: 'Placement record not found' });
    }

    const now = new Date();
    const stampRaw = `ITF-${placement.id}-${itfOfficialId}-${now.getTime()}`;
    const itfStampHash = crypto.createHash('sha256').update(stampRaw).digest('hex').slice(0, 16).toUpperCase();

    const clearance = await prisma.finalClearance.upsert({
      where: { placement_id: placement.id },
      update: {
        itf_official_id: itfOfficialId,
        itf_status: 'CLEARED',
        itf_cleared_at: now,
        clearance_timestamp: now,
        itf_stamp_hash: itfStampHash,
      },
      create: {
        placement_id: placement.id,
        itf_official_id: itfOfficialId,
        itf_status: 'CLEARED',
        itf_cleared_at: now,
        clearance_timestamp: now,
        itf_stamp_hash: itfStampHash,
      },
      include: {
        itf_official: {
          select: { name: true, email: true }
        }
      }
    });

    return res.status(200).json({
      message: 'ITF Form 8 clearance approved and stamped successfully',
      clearance,
    });
  } catch (error) {
    next(error);
  }
};