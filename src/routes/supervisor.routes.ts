import { Router } from 'express';
import {
  getAssignedTrainees,
  getTraineeSubmissions,
  getSupervisorReviewQueue,
  reviewWeeklySubmission,
} from '../controllers/supervisor.controller';
import { authenticate, requireRole } from '../middlewares/auth';

const router = Router();

// Protect all supervisor endpoints
router.use(authenticate);
router.use(requireRole('IND_SUPERVISOR', 'ADMIN', 'INST_COORDINATOR'));

router.get('/trainees', getAssignedTrainees);
router.get('/placements/:placementId/submissions', getTraineeSubmissions);
router.get('/reviews', getSupervisorReviewQueue);
router.put('/submissions/:submissionId/review', reviewWeeklySubmission);

export default router;