import express, { Express, Request, Response } from "express";
import cors from "cors";
import { prisma } from "./config/prisma";
import authRoutes from "./routes/auth.routes";
import placementRoutes from "./routes/placement.route";
import { errorHandler } from "./middlewares/errorHandler";
import logRoutes from "./routes/log.routes";

const app: Express = express();

const PORT = process.env.PORT ?? 5000;

const allowedOrigins = [
  "http://localhost:3000",
  process.env.FRONTEND_URL as string
].filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "Accept"]
  })
);

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/logs", logRoutes);
app.use('/api/placements', placementRoutes); 

app.get("/", (req: Request, res: Response) => {
  res.json({ message: `Server is running ${process.env.INSTANCE_NAME}` });
});

app.use(errorHandler);

const startServer = async () => {
  try {
    await prisma.$connect();
    console.log("Database connected");

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to connect to database:", error);
    process.exit(1);
  }
};

startServer();