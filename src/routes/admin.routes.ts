import { Router } from 'express';
import { authenticate, requireRole } from '../middlewares/auth';
import {
  getCoordinators,
  getZonalPlacementClusters,
  assignZoneToCoordinator,
  getAdminDashboardStats,
  getAllPlacements,
  getAllUsers,
  createSystemUser,
  updateUserRoleOrStatus,
  getItfSenateReportData
} from '../controllers/admin.controller';

const router = Router();



// Overview & Analytics
router.get('/dashboard-stats', getAdminDashboardStats);

// Geographic Clustering
router.get('/coordinators', getCoordinators);
router.get('/placements/clusters', getZonalPlacementClusters);
router.post('/placements/assign-zone', assignZoneToCoordinator);

// Master Placement Registry
router.get('/placements', getAllPlacements);

// User & Role Controls
router.get('/users', getAllUsers);
router.post('/users', createSystemUser);
router.put('/users/:id', updateUserRoleOrStatus);

// Senate & Form ITF-08 Reports
router.get('/reports/master', getItfSenateReportData);

export default router;