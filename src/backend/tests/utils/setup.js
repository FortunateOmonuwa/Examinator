// This file is used to set up the test environment
import { beforeAll, afterAll } from "vitest";
import request from "supertest";
import app from "../../main.js";
import dotenv from "dotenv";

// Load environment variables for tests
dotenv.config();

// Set default environment variables for testing if missing
if (!process.env.JWT_SECRET) {
  process.env.JWT_SECRET =
    "d4c1a7c563e69220b108c0a1ef3164c4af998fea96cc23ca7c3b476802ed9ada5605bda7055831eb6ee1c40c7776fe04070bcb999635a143f045ecf35304d32f";
}
if (!process.env.REFRESH_TOKEN) {
  process.env.REFRESH_TOKEN =
    "8c1c7fbd65c626e9ca0561968d6d827ca8ee52f2f338ec365b3cf93e2ef380c93894a9dec16712f96c203a184e116b4b621aaaad9ee4510f47002c571da4c2a4";
}
if (!process.env.PORT) {
  process.env.PORT = "5000";
}
if (!process.env.BASE_URL) {
  process.env.BASE_URL = "http://localhost:5173";
}

// Global setup
beforeAll(async () => {
  // console.log('Setting up test environment');

  // Check critical environment variables
  const requiredEnvVars = ["DATABASE_URL", "JWT_SECRET", "REFRESH_TOKEN"];
  const missingVars = requiredEnvVars.filter(
    (varName) => !process.env[varName]
  );

  if (missingVars.length > 0) {
    console.log("Missing environment variables:", missingVars);
    console.log(
      "Available env vars:",
      Object.keys(process.env).filter(
        (key) =>
          key.includes("DATABASE") ||
          key.includes("JWT") ||
          key.includes("TOKEN")
      )
    );
  }
});

afterAll(async () => {
  // console.log("Tearing down test environment");
});

export async function createTestExaminer(
  data = {
    firstname: "Test",
    lastname: "Examiner",
    email: `test.examiner.${Date.now()}@example.com`,
    password: "Password123#",
  }
) {
  const response = await request(app)
    .post("/api/examiner")
    .send(data)
    .set("Content-Type", "application/json");

  return response;
}

export async function loginTestUser(email, password) {
  const response = await request(app)
    .post("/api/auth/login")
    .send({ email, password })
    .set("Content-Type", "application/json");

  return response;
}

export async function getAuthToken(
  email = `test.examiner.${Date.now()}.${Math.random().toString(36).substring(7)}@example.com`,
  password = "Password123#"
) {
  // Create a test examiner
  const examinerResponse = await createTestExaminer({
    firstname: "Test",
    lastname: "Examiner",
    email,
    password,
  });

  if (!examinerResponse.body.response.isSuccessful) {
    // console.log("Examiner creation failed:", examinerResponse.body);
    throw new Error(
      `Failed to create test examiner: ${examinerResponse.body.response.message}`
    );
  }

  // Login to get token
  const loginResponse = await loginTestUser(email, password);

  if (!loginResponse.body.response.isSuccessful) {
    // console.log("Login failed:", loginResponse.body);
    // console.log("Login status:", loginResponse.status);
    throw new Error(
      `Failed to login test user: ${loginResponse.body.response.message}`
    );
  }

  // Extract token from cookies
  const cookies = loginResponse.headers["set-cookie"];
  if (!cookies) {
    throw new Error("No cookies found in login response");
  }

  const accessTokenCookie = cookies.find((cookie) =>
    cookie.startsWith("accessToken=")
  );
  if (!accessTokenCookie) {
    throw new Error("No accessToken cookie found");
  }

  const token = accessTokenCookie.split("accessToken=")[1].split(";")[0];

  return {
    token: token,
    user: loginResponse.body.response.body,
    examinerId: examinerResponse.body.response.body.id,
  };
}

export async function deleteTestExaminer(id, token) {
  return await request(app)
    .delete(`/api/examiner/${id}`)
    .set("Authorization", `Bearer ${token}`)
    .set("Content-Type", "application/json");
}
