import express, { Express, Request, Response } from "express";
import cors from "cors";
import { prisma } from "./config/prisma";
import authRoutes from "./routes/auth.routes";
import placementRoutes from "./routes/placement.route";
import submissionRoutes from './routes/submission.routes';

import { errorHandler } from "./middlewares/errorHandler";
import logRoutes from "./routes/log.routes";
import supervisorRoutes from "./routes/supervisor.routes";

const app: Express = express();

const PORT = 5000;

app.use(
  cors({
    origin: true,
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/logs", logRoutes);
app.use("/api/placements", placementRoutes);
app.use('/api/submissions', submissionRoutes);
app.use('/api/supervisor', supervisorRoutes)


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

    app.listen(PORT, "0.0.0.0", () => {
      console.log(`Server running on http://0.0.0.0:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();