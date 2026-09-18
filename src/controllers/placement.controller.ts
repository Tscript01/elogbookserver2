import { Request, Response, NextFunction } from 'express';
import { prisma } from '../config/prisma';
import { AuthenticatedRequest } from '../middlewares/auth';

export const createPlacement = async (req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<Response | void> => {
  try {
    const {
    //   student_id,
      company_name,
      
      ind_supervisor_id,
      inst_coordinator_id,
      company_address,
      company_contact,
      company_email,
      start_date,
      end_date
    } = req.body;
const userId = req.user?.id;
console.log('Authenticated user ID:', userId);
    if (!userId) {
      return res.status(401).json({ error: 'Unauthorized: No user ID found in token' });
    }
    
console.log("ind_supervisor_id =", ind_supervisor_id);
   
    const existingPlacement = await prisma.placement.findFirst({
      where: { student_id: userId }
    });
  console.log(existingPlacement,'ssds');
    if (existingPlacement !== null ) {
      return res.status(409).json({ 
        error: 'This student already has an assigned placement. Please update or remove the existing one first.' 
      });
    }
  
    
    const placement = await prisma.placement.create({
      data: {
        student_id: userId,
        company_name,
        company_address: company_address,
        company_contact: company_contact,
        company_email: company_email,
        ind_supervisor_id: ind_supervisor_id || null,
        inst_coordinator_id: inst_coordinator_id || null,
        start_date: new Date(start_date),
        end_date: new Date(end_date),
      }
      
    });

    return res.status(201).json({
      message: 'Placement created successfully',
      placement
    });
  } catch (error) {
    console.log(error);
    
    next(error);
  }
};

export const getCurrentPlacement = async (req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<Response | void> => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      return res.status(401).json({ error: 'Unauthorized: No user ID found in token' });
    }

    const placement = await prisma.placement.findFirst({
      where: { student_id: userId }
    });

    if (!placement) {
      return res.status(404).json({ error: 'No active placement found for this student' });
    }

    return res.status(200).json(placement);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const getPlacementById = async (req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<Response | void> => {
  try {
    const { id } = req.params;

    const placement = await prisma.placement.findUnique({
      where: { id }
    });

    if (!placement) {
      return res.status(404).json({ error: 'Placement not found' });
    }

    return res.status(200).json(placement);
  } catch (error) {
    console.log(error);
    next(error);
  }
};