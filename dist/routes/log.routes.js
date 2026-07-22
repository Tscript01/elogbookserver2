"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const log_controller_1 = require("../controllers/log.controller");
const auth_1 = require("../middlewares/auth");
const router = (0, express_1.Router)();
// Only students can create daily logs
router.post('/', auth_1.authenticate, (0, auth_1.requireRole)('STUDENT'), 
// validate(createDailyLogSchema),
log_controller_1.createDailyLog);
// Students, Industry Supervisors, and Institution Coordinators can fetch logs
router.get('/placement/:placementId', auth_1.authenticate, (0, auth_1.requireRole)('STUDENT', 'IND_SUPERVISOR', 'INST_COORDINATOR'), log_controller_1.getPlacementLogs);
exports.default = router;
//# sourceMappingURL=log.routes.js.map