import { Response, NextFunction } from 'express';
import { prisma } from '../config/prisma';
import { AuthenticatedRequest } from '../middlewares/auth';

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