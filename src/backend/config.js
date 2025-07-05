import dotenv from "dotenv";
import cors from "cors";

const environment = process.env.NODE_ENV || "development";
const port = process.env.PORT || 5001;

const corsConfig = () => {
  return cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:3000",
      "https://examinator-frontend-dev.onrender.com",
      "https://examinator-frontend.onrender.com",
      "http://localhost:5001",
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  });
};

let baseUrl = "";
let clientUrl = "";
let redisHost;
let redisPort;
//const env = "local";
const env = "dev";
//-------------------------------------------------
if (env === "local") {
  baseUrl = "http://localhost:5001";
  clientUrl = "http://localhost:5173";
  redisHost = "127.0.0.1";
  redisPort = 6379;
} else if (env === "dev") {
  baseUrl = "https://examinator-backend-dev.onrender.com";
  clientUrl = "https://examinatorr.netlify.app";
  redisHost = process.env.REDIS_HOST;
  redisPort = process.env.REDIS_PORT;
}

export {
  environment,
  dotenv,
  port,
  corsConfig,
  baseUrl,
  clientUrl,
  redisHost,
  redisPort,
};
