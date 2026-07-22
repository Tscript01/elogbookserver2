import express, { Express, Request, Response } from "express";
import { prisma } from "./config/prisma";
import authRoutes from "./routes/auth.routes";
import placementRoutes from "./routes/placement.route";
import { errorHandler } from "./middlewares/errorHandler";
import logRoutes from "./routes/log.routes";

const app: Express = express();

const PORT = process.env.PORT ?? 5000;


app.use(express.json());

app.use("/api/auth",authRoutes );
app.use("/api/logs", logRoutes);
app.use('/api/placements',placementRoutes); 
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