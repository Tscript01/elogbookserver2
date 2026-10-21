import { Response, NextFunction } from 'express';
// import { RtcTokenBuilder, RtcRole } from 'agora-access-token';
import { prisma } from '../config/prisma';
import { AuthenticatedRequest } from '../middlewares/auth';

export const getPlacementChatHistory = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { placementId } = req.params;

    const messages = await prisma.chatMessage.findMany({
      where: { placement_id: placementId },
      orderBy: { created_at: 'asc' },
      take: 100,
    });

    res.json({ success: true, messages });
  } catch (error) {
    next(error);
  }
};

// export const generateAgoraToken = async (
//   req: AuthenticatedRequest,
//   res: Response,
//   next: NextFunction
// ): Promise<void> => {
//   try {
//     const { channelName } = req.body;
//     const appId = process.env.AGORA_APP_ID;
//     const appCertificate = process.env.AGORA_APP_CERTIFICATE;

//     if (!appId || !appCertificate) {
//       res.status(500).json({ error: 'Agora credentials missing on server' });
//       return;
//     }

//     const expirationTimeInSeconds = 3600;
//     const currentTimestamp = Math.floor(Date.now() / 1000);
//     const privilegeExpiredTs = currentTimestamp + expirationTimeInSeconds;

//     const token = RtcTokenBuilder.buildTokenWithUid(
//       appId,
//       appCertificate,
//       channelName,
//       0,
//       RtcRole.PUBLISHER,
//       privilegeExpiredTs
//     );

//     res.json({ success: true, token, appId });
//   } catch (error) {
//     next(error);
//   }
// };