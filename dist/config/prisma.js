"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
require("dotenv/config");
const pg_1 = __importDefault(require("pg"));
const adapter_pg_1 = require("@prisma/adapter-pg");
const client_1 = require("../generated/prisma/client");
const globalForPrisma = global;
function createMockPrismaClient() {
    console.warn("[AI Studio] Database not connected — using mock Prisma client");
    const inMemoryStore = new Map();
    const createModelHandler = (modelName) => {
        return {
            findMany: async (_args) => {
                const records = inMemoryStore.get(modelName) || [];
                return records;
            },
            findFirst: async (args) => {
                const records = inMemoryStore.get(modelName) || [];
                if (!args?.where)
                    return records[0] || null;
                return records.find((r) => {
                    return Object.entries(args.where).every(([k, v]) => r[k] === v);
                }) || null;
            },
            findUnique: async (args) => {
                const records = inMemoryStore.get(modelName) || [];
                if (!args?.where)
                    return null;
                return records.find((r) => {
                    return Object.entries(args.where).every(([k, v]) => r[k] === v);
                }) || null;
            },
            create: async (args) => {
                const records = inMemoryStore.get(modelName) || [];
                const newRecord = {
                    id: `mock-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
                    created_at: new Date(),
                    ...(args?.data ?? {}),
                };
                records.push(newRecord);
                inMemoryStore.set(modelName, records);
                return newRecord;
            },
            update: async (args) => {
                const records = inMemoryStore.get(modelName) || [];
                let record = records.find((r) => {
                    return Object.entries(args?.where || {}).every(([k, v]) => r[k] === v);
                });
                if (record) {
                    Object.assign(record, args?.data ?? {});
                }
                else {
                    record = { ...(args?.where ?? {}), ...(args?.data ?? {}) };
                    records.push(record);
                }
                return record;
            },
            delete: async (args) => {
                const records = inMemoryStore.get(modelName) || [];
                const idx = records.findIndex((r) => {
                    return Object.entries(args?.where || {}).every(([k, v]) => r[k] === v);
                });
                if (idx !== -1) {
                    const [deleted] = records.splice(idx, 1);
                    return deleted;
                }
                return {};
            },
            deleteMany: async (_args) => {
                inMemoryStore.set(modelName, []);
                return { count: 0 };
            },
            count: async () => (inMemoryStore.get(modelName) || []).length,
        };
    };
    const mockClient = {
        $connect: async () => {
            console.log("[AI Studio] Mock database connected");
        },
        $disconnect: async () => { },
        $transaction: async (arg) => {
            if (typeof arg === "function") {
                return arg(mockClient);
            }
            if (Array.isArray(arg)) {
                return Promise.all(arg);
            }
            return arg;
        },
    };
    return new Proxy(mockClient, {
        get: (target, prop) => {
            if (prop in target)
                return target[prop];
            if (typeof prop === "string" && !prop.startsWith("$")) {
                return createModelHandler(prop);
            }
            return undefined;
        },
    });
}
const createPrismaClient = () => {
    const connectionString = process.env.DATABASE_URL;
    if (!connectionString) {
        return createMockPrismaClient();
    }
    try {
        const pool = new pg_1.default.Pool({
            connectionString,
            ssl: {
                rejectUnauthorized: false,
            },
        });
        const adapter = new adapter_pg_1.PrismaPg(pool);
        return new client_1.PrismaClient({ adapter });
    }
    catch (error) {
        console.warn("[AI Studio] Error instantiating Prisma with adapter, falling back to mock:", error);
        return createMockPrismaClient();
    }
};
exports.prisma = globalForPrisma.prisma || createPrismaClient();
if (process.env.NODE_ENV !== "production") {
    globalForPrisma.prisma = exports.prisma;
}
//# sourceMappingURL=prisma.js.map