"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const prisma_1 = require("./config/prisma");
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const placement_route_1 = __importDefault(require("./routes/placement.route"));
const errorHandler_1 = require("./middlewares/errorHandler");
const log_routes_1 = __importDefault(require("./routes/log.routes"));
const app = (0, express_1.default)();
const PORT = process.env.PORT ?? 5000;
app.use(express_1.default.json());
app.use("/api/auth", auth_routes_1.default);
app.use("/api/logs", log_routes_1.default);
app.use('/api/placements', placement_route_1.default);
app.get("/", (req, res) => {
    res.json({ message: "Server is running " });
});
app.use(errorHandler_1.errorHandler);
const startServer = async () => {
    try {
        await prisma_1.prisma.$connect();
        console.log("Database connected");
        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });
    }
    catch (error) {
        console.error("Failed to connect to database:", error);
        process.exit(1);
    }
};
startServer();
//# sourceMappingURL=index.js.map