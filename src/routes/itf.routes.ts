import { Router } from 'express';
import { 
  getItfDashboardOverview, 
  getItfStudentsExportData, 
  approveItfClearance 
} from '../controllers/itf.controller';
import { authenticate } from '../middlewares/auth';

const router = Router();

router.use(authenticate);

router.get('/overview', getItfDashboardOverview);
router.get('/students-export', getItfStudentsExportData);
router.post('/clearance/:placementId/stamp', approveItfClearance);

export default router;