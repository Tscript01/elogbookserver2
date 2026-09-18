import dotenv from "dotenv";

dotenv.config();

const env = {
  DATABASE_URL: process.env.DATABASE_URL as string,
  JWT_ACCESS_SECRET: process.env.JWT_ACCESS_SECRET || "default_dev_jwt_access_secret_ai_studio",
  JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET || "default_dev_jwt_refresh_secret_ai_studio",
  JWT_ACCESS_EXPIRES_IN: process.env.JWT_ACCESS_EXPIRES_IN ?? "15m",
  JWT_REFRESH_EXPIRES_IN: process.env.JWT_REFRESH_EXPIRES_IN ?? "7d",
  PORT: "3000",
};

export default env;