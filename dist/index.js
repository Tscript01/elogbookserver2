"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const prisma_1 = require("./config/prisma");
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const placement_route_1 = __importDefault(require("./routes/placement.route"));
const errorHandler_1 = require("./middlewares/errorHandler");
const log_routes_1 = __importDefault(require("./routes/log.routes"));
const app = (0, express_1.default)();
const PORT = 3000;
app.use((0, cors_1.default)({
    origin: true,
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
}));
app.use(express_1.default.json());
app.use("/api/auth", auth_routes_1.default);
app.use("/api/logs", log_routes_1.default);
app.use("/api/placements", placement_route_1.default);
app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", port: PORT });
});
app.get("/", (req, res) => {
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
app.use(errorHandler_1.errorHandler);
const startServer = async () => {
    try {
        if (process.env.DATABASE_URL) {
            try {
                await prisma_1.prisma.$connect();
                console.log("Database connected");
            }
            catch (dbErr) {
                console.warn("[AI Studio] Database connection failed, falling back to mock mode:", dbErr);
            }
        }
        else {
            console.warn("[AI Studio] DATABASE_URL not provided, starting in mock mode");
        }
        app.listen(PORT, "0.0.0.0", () => {
            console.log(`Server running on http://0.0.0.0:${PORT}`);
        });
    }
    catch (error) {
        console.error("Failed to start server:", error);
        process.exit(1);
    }
};
startServer();
//# sourceMappingURL=index.js.map