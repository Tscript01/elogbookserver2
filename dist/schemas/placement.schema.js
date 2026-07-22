"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPlacementSchema = void 0;
const zod_1 = require("zod");
exports.createPlacementSchema = zod_1.z.object({
    //   student_id: z.string().uuid(),
    company_name: zod_1.z.string().min(2),
    company_address: zod_1.z.string().min(5).optional(),
    company_contact: zod_1.z.string().min(5).optional(),
    company_email: zod_1.z.string().email().optional(),
    ind_supervisor_id: zod_1.z.string().uuid(),
    inst_coordinator_id: zod_1.z.string().uuid().optional(),
    start_date: zod_1.z.string().datetime(),
    end_date: zod_1.z.string().datetime(),
}).refine(data => new Date(data.start_date) < new Date(data.end_date), {
    message: "End date must be after the start date",
    path: ["end_date"]
});
//# sourceMappingURL=placement.schema.js.map