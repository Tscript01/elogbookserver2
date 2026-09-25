import { Router } from 'express';
import {
  getCoordinatorDashboard,
  getStudentLogbook,
  assessAndClearStudent,
  getCoordinatorProfile,
  updateCoordinatorProfile,
} from '../controllers/coordinator.controller';
import { authenticate, requireRole } from '../middlewares/auth';

const router = Router();

router.use(authenticate);
router.use(requireRole('INST_COORDINATOR', 'ADMIN'));

router.get('/dashboard', getCoordinatorDashboard);
router.get('/placements/:placementId/logbook', getStudentLogbook);
router.post('/placements/:placementId/assess', assessAndClearStudent);
router.get('/profile', getCoordinatorProfile);
router.put('/profile', updateCoordinatorProfile);

export default router;