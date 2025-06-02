// This file is used to set up the test environment
import { beforeAll, afterAll } from "vitest";
import request from "supertest";
import app from "../../main.js";
import dotenv from "dotenv";

// Load environment variables for tests
dotenv.config();

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
    userId: loginResponse.body.response.body.userId,
  };
}

export async function deleteTestExaminer(id, token) {
  return await request(app)
    .delete(`/api/examiner/${id}`)
    .set("Authorization", `Bearer ${token}`)
    .set("Content-Type", "application/json");
}
