import express, { Express, Request, Response } from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";
import { prisma } from "./config/prisma";
import authRoutes from "./routes/auth.routes";
import placementRoutes from "./routes/placement.route";
import submissionRoutes from "./routes/submission.routes";
import coordinatorRouter from "./routes/coordinator.routes";
import studentRoutes from "./routes/student.routes";
import attendanceRoutes from './routes/attendance.routes';
import itfRoutes from "./routes/itf.routes";
import logRoutes from "./routes/log.routes";
import supervisorRoutes from "./routes/supervisor.routes";
import adminRoutes from "./routes/admin.routes";
import teleRoutes from "./routes/tele.routes";
import { errorHandler } from "./middlewares/errorHandler";
import { setupChatSocket } from "./sockets/chat.socket";

const app: Express = express();
const server = http.createServer(app);

const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 5000;

// Socket.io Setup
const io = new Server(server, {
  cors: {
    origin: true,
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  },
});

setupChatSocket(io);

app.use(
  cors({
    origin: true,
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

// Existing Application Routes
app.use("/api/auth", authRoutes);
app.use("/api/logs", logRoutes);
app.use("/api/placements", placementRoutes);
app.use("/api/submissions", submissionRoutes);
app.use("/api/supervisor", supervisorRoutes);
app.use("/api/coordinator", coordinatorRouter);
app.use("/api/student", studentRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/itf", itfRoutes);

app.use('/api/attendance', attendanceRoutes);
// Real-Time Chat & Tele-Supervision Routes
app.use("/api/tele", teleRoutes);

app.get("/api/health", (_req: Request, res: Response) => {
  res.json({ status: "ok", port: PORT });
});

app.get("/", (req: Request, res: Response) => {
  res.json({
    message: `Server is running ${process.env.INSTANCE_NAME ?? "successfully"}`,
    status: "ok",
    docs: {
      auth: "/api/auth",
      logs: "/api/logs",
      placements: "/api/placements",
      itf: "/api/itf",
      tele: "/api/tele",
    },
  });
});

app.use(errorHandler);

const startServer = async () => {
  try {
    if (process.env.DATABASE_URL) {
      try {
        await prisma.$connect();
        console.log("Database connected");
      } catch (dbErr) {
        console.warn("[AI Studio] Database connection failed, falling back to mock mode:", dbErr);
      }
    } else {
      console.warn("[AI Studio] DATABASE_URL not provided, starting in mock mode");
    }

    server.listen(PORT, "0.0.0.0", () => {
      console.log(`Server running on http://0.0.0.0:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();