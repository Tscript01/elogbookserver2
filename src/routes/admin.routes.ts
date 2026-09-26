import { Router } from 'express';
import { authenticate, requireRole } from '../middlewares/auth';
import {
  getCoordinators,
  getZonalPlacementClusters,
  assignZoneToCoordinator
} from '../controllers/admin.controller';

const router = Router();

router.use(authenticate);
router.use(requireRole('ADMIN'));

router.get('/coordinators', getCoordinators);
router.get('/placements/clusters', getZonalPlacementClusters);
router.post('/placements/assign-zone', assignZoneToCoordinator);

export default router;