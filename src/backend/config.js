import dotenv from "dotenv";
const environment = process.env.NODE_ENV || "development";
const port = process.env.PORT || 5001;
import cors from "cors";

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
export { environment, dotenv, port, corsConfig };
