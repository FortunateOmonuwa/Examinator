import { describe, it, expect, afterAll, beforeAll } from "vitest";
import request from "supertest";
import app from "../../main.js";
import { getAuthToken, deleteTestExaminer } from "../utils/setup.js";

describe("POST /api/examiner", () => {
  it("should register a new examiner successfully with valid input", async () => {
    const testData = {
      firstname: "John",
      lastname: "Doe",
      email: `examinertest${Date.now()}.${Math.random().toString(36).substring(7)}@example.com`,
      password: "Password123#",
    };

    const response = await createExaminer(testData);

    // Debug output for CI
    if (response.status !== 200) {
      // console.log("Examiner creation failed in CI:");
      // console.log("Status:", response.status);
      // console.log("Response:", JSON.stringify(response.body, null, 2));
    }

    expect(response.status).toBe(200);
    expect(response.body.response.isSuccessful).toBe(true);

    const examinerId = response.body.response.body.id;
    expect(examinerId).toBeDefined();

    // Test login to get token
    const loginResponse = await request(app)
      .post("/api/auth/login")
      .send({ email: testData.email, password: testData.password })
      .set("Content-Type", "application/json");

    // Debug output for CI
    if (loginResponse.status !== 200) {
      // console.log("Login failed in CI:");
      // console.log("Status:", loginResponse.status);
      // console.log("Response:", JSON.stringify(loginResponse.body, null, 2));
    }

    expect(loginResponse.status).toBe(200);
    expect(loginResponse.body.response.isSuccessful).toBe(true);

    // Extract token from cookies
    const cookies = loginResponse.headers["set-cookie"];
    expect(cookies).toBeDefined();

    const accessTokenCookie = cookies.find((cookie) =>
      cookie.startsWith("accessToken=")
    );
    expect(accessTokenCookie).toBeDefined();

    const token = accessTokenCookie.split("accessToken=")[1].split(";")[0];
    expect(token).toBeDefined();

    // Use auth token for deletion
    const deleteRes = await deleteTestExaminer(examinerId, token);
    expect(deleteRes.status).toBe(200);
  });

  it("should return 400 for missing fields", async () => {
    const response = await createExaminer({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    });

    expect(response.status).toBe(400);
    expect(response.body.response.isSuccessful).toBe(false);
  });

  it("should return 400 for invalid email format", async () => {
    const response = await createExaminer({
      email: "invalid-email",
    });

    expect(response.status).toBe(400);
    expect(response.body.response.isSuccessful).toBe(false);
  });
});

describe("GET /api/examiner/:id", () => {
  it("it should return 200 for an examiner detail", async () => {
    // Create examiner and get auth token
    const authData = await getAuthToken();
    const { token, examinerId } = authData;

    // Get examiner details with authentication
    const examinerResponse = await getExaminer(examinerId, token);
    expect(examinerResponse.status).toBe(200);
    expect(examinerResponse.body.response.isSuccessful).toBe(true);
    expect(examinerResponse.body.response.body).not.toBeNull();
    expect(examinerResponse.body.response.body.id).toBe(examinerId);

    // Clean up
    const del = await deleteTestExaminer(examinerId, token);
    expect(del.status).toBe(200);
  });
});

//____________________________________________________________________________
async function createExaminer(
  data = {
    firstname: "John",
    lastname: "Doe",
    email: `examinertest${Date.now()}@example.com`,
    password: "Password123#",
  }
) {
  return await request(app)
    .post("/api/examiner")
    .send(data)
    .set("Content-Type", "application/json");
}

async function getExaminer(id, token) {
  return await request(app)
    .get(`/api/examiner/${id}`)
    .set("Authorization", `Bearer ${token}`)
    .set("Accept", "application/json");
}

async function deleteExaminer(id, token) {
  return await request(app)
    .delete(`/api/examiner/${id}`)
    .set("Authorization", `Bearer ${token}`);
}
export { createExaminer, getExaminer, deleteExaminer };
