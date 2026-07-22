"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPlacement = void 0;
const prisma_1 = require("../config/prisma");
const createPlacement = async (req, res, next) => {
    try {
        const { 
        //   student_id,
        company_name, ind_supervisor_id, inst_coordinator_id, company_address, company_contact, company_email, start_date, end_date } = req.body;
        const userId = req.user?.id;
        console.log('Authenticated user ID:', userId);
        if (!userId) {
            return res.status(401).json({ error: 'Unauthorized: No user ID found in token' });
        }
        const existingPlacement = await prisma_1.prisma.placement.findFirst({
            where: { student_id: userId }
        });
        if (existingPlacement) {
            return res.status(409).json({
                error: 'This student already has an assigned placement. Please update or remove the existing one first.'
            });
        }
        const placement = await prisma_1.prisma.placement.create({
            data: {
                student_id: userId,
                company_name,
                company_address: company_address,
                company_contact: company_contact,
                company_email: company_email,
                ind_supervisor_id,
                inst_coordinator_id: inst_coordinator_id || null,
                start_date: new Date(start_date),
                end_date: new Date(end_date),
            }
        });
        return res.status(201).json({
            message: 'Placement created successfully',
            placement
        });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
};
exports.createPlacement = createPlacement;
//# sourceMappingURL=placement.controller.js.map