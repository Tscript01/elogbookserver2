import { Response, NextFunction } from 'express';
import bcrypt from 'bcryptjs';
import { prisma } from '../config/prisma';
import { AuthenticatedRequest } from '../middlewares/auth';

export const getAdminDashboardStats = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  try {
    const [
      totalStudents,
      totalPlacements,
      totalCoordinators,
      unassignedPlacements,
      totalWeeklySubmissions,
      pendingClearances,
      clearedPlacements
    ] = await Promise.all([
      prisma.user.count({ where: { role: 'STUDENT' } }),
      prisma.placement.count(),
      prisma.user.count({ where: { role: 'INST_COORDINATOR' } }),
      prisma.placement.count({ where: { inst_coordinator_id: null } }),
      prisma.weeklySubmission.count(),
      prisma.finalClearance.count({ where: { coordinator_status: 'PENDING' } }),
      prisma.finalClearance.count({ where: { coordinator_status: 'CLEARED' } }),
    ]);

    return res.status(200).json({
      status: 'success',
      data: {
        totalStudents,
        totalPlacements,
        totalCoordinators,
        unassignedPlacements,
        totalWeeklySubmissions,
        pendingClearances,
        clearedPlacements
      }
    });
  } catch (error) {
    console.error('Error fetching admin dashboard stats:', error);
    next(error);
  }
};

export const getCoordinators = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  try {
    const coordinators = await prisma.user.findMany({
      where: { role: 'INST_COORDINATOR' },
      select: {
        id: true,
        name: true,
        email: true,
        department: true,
        assigned_state: true,
        assigned_city: true,
        _count: {
          select: { instCoordinatorPlacements: true }
        }
      },
      orderBy: { name: 'asc' }
    });

    return res.status(200).json({
      status: 'success',
      data: coordinators
    });
  } catch (error) {
    console.error('Error fetching coordinators:', error);
    next(error);
  }
};

export const getZonalPlacementClusters = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  try {
    const placements = await prisma.placement.findMany({
      include: {
        student: {
          select: {
            id: true,
            name: true,
            email: true,
            matric_no: true
          }
        },
        inst_coordinator: {
          select: {
            id: true,
            name: true,
            email: true,
            department: true
          }
        },
        ind_supervisor: {
          select: {
            id: true,
            name: true,
            email: true
          }
        }
      },
      orderBy: [
        { state: 'asc' },
        { city: 'asc' }
      ]
    });

    const clusters: Record<string, Record<string, typeof placements>> = {};

    for (const p of placements) {
      const state = p.state || 'Unspecified';
      const city = p.city || 'Unspecified';

      if (!clusters[state]) clusters[state] = {};
      if (!clusters[state][city]) clusters[state][city] = [];

      clusters[state][city].push(p);
    }

    return res.status(200).json({
      status: 'success',
      data: clusters
    });
  } catch (error) {
    console.error('Error fetching zonal placement clusters:', error);
    next(error);
  }
};

export const assignZoneToCoordinator = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  try {
    const { coordinator_id, state, city } = req.body;

    if (!coordinator_id || !state) {
      return res.status(400).json({
        status: 'error',
        message: 'Coordinator ID and State are required for zonal assignment.'
      });
    }

    const coordinator = await prisma.user.findFirst({
      where: { id: coordinator_id, role: 'INST_COORDINATOR' }
    });

    if (!coordinator) {
      return res.status(404).json({
        status: 'error',
        message: 'Institutional coordinator not found.'
      });
    }

    const whereClause: any = { state };
    if (city) {
      whereClause.city = city;
    }

    const [updatePlacementsResult] = await prisma.$transaction([
      prisma.placement.updateMany({
        where: whereClause,
        data: { inst_coordinator_id: coordinator_id }
      }),
      prisma.user.update({
        where: { id: coordinator_id },
        data: {
          assigned_state: state,
          assigned_city: city || 'All Cities'
        }
      })
    ]);

    return res.status(200).json({
      status: 'success',
      message: `Assigned ${updatePlacementsResult.count} trainees in ${city ? `${city}, ` : ''}${state} to ${coordinator.name}.`,
      count: updatePlacementsResult.count
    });
  } catch (error) {
    console.error('Error assigning zone to coordinator:', error);
    next(error);
  }
};

export const getAllPlacements = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  try {
    const { state, city, status, search } = req.query;

    const where: any = {};

    if (state) where.state = String(state);
    if (city) where.city = String(city);

    if (status === 'unassigned') {
      where.inst_coordinator_id = null;
    } else if (status === 'assigned') {
      where.inst_coordinator_id = { not: null };
    }

    if (search) {
      const q = String(search).trim();
      where.OR = [
        { company_name: { contains: q, mode: 'insensitive' } },
        { student: { name: { contains: q, mode: 'insensitive' } } },
        { student: { matric_no: { contains: q, mode: 'insensitive' } } },
      ];
    }

    const placements = await prisma.placement.findMany({
      where,
      include: {
        student: {
          select: { id: true, name: true, email: true, matric_no: true, department: true }
        },
        inst_coordinator: {
          select: { id: true, name: true, email: true, department: true }
        },
        clearance: {
          select: { coordinator_status: true, coordinator_score: true }
        },
        _count: {
          select: { weekly_submissions: true }
        }
      },
   orderBy: { start_date: 'desc' }
    });

    return res.status(200).json({
      status: 'success',
      data: placements
    });
  } catch (error) {
    console.error('Error fetching all placements:', error);
    next(error);
  }
};

export const getAllUsers = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  try {
    const { role, search } = req.query;
    const where: any = {};

    if (role) {
      where.role = String(role);
    }

    if (search) {
      const q = String(search).trim();
      where.OR = [
        { name: { contains: q, mode: 'insensitive' } },
        { email: { contains: q, mode: 'insensitive' } },
        { matric_no: { contains: q, mode: 'insensitive' } }
      ];
    }

    const users = await prisma.user.findMany({
      where,
      select: {
        id: true,
        name: true,
        email: true,
        matric_no: true,
        role: true,
        department: true,
        assigned_state: true,
        assigned_city: true,
        created_at: true,
      },
      orderBy: { created_at: 'desc' }
    });

    return res.status(200).json({
      status: 'success',
      data: users
    });
  } catch (error) {
    console.error('Error fetching users:', error);
    next(error);
  }
};

export const createSystemUser = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  try {
    const { name, email, password, role, matric_no, department, assigned_state, assigned_city } = req.body;

    if (!name || !email || !password || !role) {
      return res.status(400).json({
        status: 'error',
        message: 'Name, email, password, and role are required.'
      });
    }

    const existing = await prisma.user.findUnique({
      where: { email: email.toLowerCase().trim() }
    });

    if (existing) {
      return res.status(409).json({
        status: 'error',
        message: 'Email address already registered.'
      });
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name: name.trim(),
        email: email.toLowerCase().trim(),
        password_hash: passwordHash,
        role,
        matric_no: matric_no ? matric_no.trim() : null,
        department: department || null,
        assigned_state: assigned_state || null,
        assigned_city: assigned_city || null,
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        matric_no: true,
        department: true
      }
    });

    return res.status(201).json({
      status: 'success',
      data: user
    });
  } catch (error) {
    console.error('Error creating system user:', error);
    next(error);
  }
};

export const updateUserRoleOrStatus = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  try {
    const { id } = req.params;
    const { role, department, assigned_state, assigned_city, password } = req.body;

    const data: any = {};
    if (role) data.role = role;
    if (department !== undefined) data.department = department;
    if (assigned_state !== undefined) data.assigned_state = assigned_state;
    if (assigned_city !== undefined) data.assigned_city = assigned_city;
    if (password) {
      data.password_hash = await bcrypt.hash(password, 10);
    }

    const updated = await prisma.user.update({
      where: { id },
      data,
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        department: true,
        assigned_state: true,
        assigned_city: true
      }
    });

    return res.status(200).json({
      status: 'success',
      data: updated
    });
  } catch (error) {
    console.error('Error updating user role or status:', error);
    next(error);
  }
};

export const getItfSenateReportData = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  try {
    const placements = await prisma.placement.findMany({
      include: {
        student: {
          select: { name: true, matric_no: true, department: true, email: true }
        },
        inst_coordinator: {
          select: { name: true, email: true }
        },
        clearance: true,
        _count: {
          select: { weekly_submissions: true }
        }
      },
      orderBy: { student: { matric_no: 'asc' } }
    });

    const reportRows = placements.map((p: { student: { name: any; matric_no: any; department: any; }; company_name: any; company_address: any; state: any; city: any; _count: { weekly_submissions: any; }; inst_coordinator: { name: any; }; clearance: { coordinator_score: any; coordinator_status: any; itf_status: any; }; }, index: number) => ({
      sn: index + 1,
      student_name: p.student.name,
      matric_no: p.student.matric_no || 'N/A',
      department: p.student.department || 'N/A',
      company_name: p.company_name,
      company_address: p.company_address || 'N/A',
      state: p.state,
      city: p.city,
      duration_weeks: p._count.weekly_submissions,
      coordinator_name: p.inst_coordinator?.name || 'Unassigned',
      score: p.clearance?.coordinator_score ?? 'Pending',
      clearance_status: p.clearance?.coordinator_status || 'PENDING',
      itf_status: p.clearance?.itf_status || 'NOT_SUBMITTED'
    }));

    return res.status(200).json({
      status: 'success',
      data: reportRows
    });
  } catch (error) {
    console.error('Error generating ITF senate report data:', error);
    next(error);
  }
};