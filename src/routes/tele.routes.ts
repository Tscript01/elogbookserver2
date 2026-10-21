import { Router } from "express";
import { getPlacementChatHistory, generateAgoraToken } from "../controllers/tele.controller";
import { authenticate } from "../middlewares/auth";

const router = Router();

router.get("/chat/:placementId", authenticate, getPlacementChatHistory);
router.post("/agora-token", authenticate, generateAgoraToken);

export default router;