import { Router } from 'express';
import {
  getCoordinatorDashboard,
  getTraineesRoster,
  getClearanceCandidates,
  issueInstitutionalClearance,
  getPublicVerification,
} from '../controllers/coordinator.controller';
import { authenticate, requireRole } from '../middlewares/auth';

const router = Router();

// Public QR code scan endpoint
router.get('/verify/:code', getPublicVerification);

// Coordinator routes
router.use(authenticate);
router.use(requireRole('INST_COORDINATOR', 'ADMIN'));

router.get('/dashboard', getCoordinatorDashboard);
router.get('/students', getTraineesRoster);
router.get('/clearance-candidates', getClearanceCandidates);
router.post('/clearance/:placementId', issueInstitutionalClearance);

export default router;