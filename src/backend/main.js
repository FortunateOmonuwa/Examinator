import { express, dotenv, port, corsConfig } from "./imports/PackageImports.js";
import cookieParser from "cookie-parser";
import { AdminRouter } from "./imports/RouteImports.js";
import { ExaminerRouter } from "./imports/RouteImports.js";
import { ExamRouter } from "./imports/RouteImports.js";
import { AuthRouter } from "./imports/RouteImports.js";
import { ExamAttemptRouter } from "./imports/RouteImports.js";

const app = express();
dotenv.config();

process.once("exit", () => {
  // console.log("App exiting...");
});

//app.use(corsConfig());
//app.options("/*", corsMiddleware);

const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:3000",
  "https://examinator-frontend-dev.onrender.com",
  "https://examinator-frontend.onrender.com",
];

app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.header("Access-Control-Allow-Origin", origin);
    res.header("Access-Control-Allow-Credentials", "true");
  }

  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") {
    return res.sendStatus(204);
  }
  next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/admin", AdminRouter);
app.use("/api/examiner", ExaminerRouter);
app.use("/api/exam", ExamRouter);
app.use("/api/auth", AuthRouter);
app.use("/api/exam-attempt", ExamAttemptRouter);

try {
  app.listen(port, () => {
    // console.log(`App is listening on ${port}`);
  });
} catch (e) {
  // console.error(e.message);
}

export default app;
