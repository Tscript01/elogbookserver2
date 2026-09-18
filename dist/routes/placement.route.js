"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const placement_controller_1 = require("../controllers/placement.controller");
const placement_schema_1 = require("../schemas/placement.schema");
const validate_1 = require("../middlewares/validate");
const auth_1 = require("../middlewares/auth");
const router = (0, express_1.Router)();
router.post('/', auth_1.authenticate, (0, auth_1.requireRole)('ADMIN', "STUDENT"), (0, validate_1.validate)(placement_schema_1.createPlacementSchema), placement_controller_1.createPlacement);
// router.get(
//   '/:studentId',
//   requireRole('ADMIN', 'INST_COORDINATOR', 'IND_SUPERVISOR', 'STUDENT'),
//   getPlacement
// );
exports.default = router;
//# sourceMappingURL=placement.route.js.map