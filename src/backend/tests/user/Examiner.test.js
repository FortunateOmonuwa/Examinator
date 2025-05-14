import { describe, it, expect, afterAll, beforeAll } from "vitest";
import request from "supertest";
import app from "../../main.js";

describe("POST /api/examiner", () => {
  it("should register a new examiner successfully with valid input", async () => {
    const response = await createExaminer();

    expect(response.status).toBe(200);
    expect(response.body.response.isSuccessful).toBe(true);

    const examinerId = response.body.response.body.id;
    expect(examinerId).toBeDefined();

    const deleteRes = await deleteExaminer(examinerId);
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
    const res = await createExaminer();
    expect(res.status).toBe(200);
    expect(res.body.response.isSuccessful).toBe(true);

    const id = res.body.response.body.id;
    expect(id).toBeDefined();

    const examinerResponse = await getExaminer(id);
    expect(examinerResponse.status).toBe(200);
    expect(examinerResponse.body.response.isSuccessful).toBe(true);
    expect(examinerResponse.body.response.body).not.toBeNull();
    expect(examinerResponse.body.response.body.id).toBe(id);

    const del = await deleteExaminer(id);
    expect(del.status).toBe(200);
  });
});

//____________________________________________________________________________
async function createExaminer(
  data = {
    firstname: "John",
    lastname: "Doe",
    email: "examiner@example.com",
    password: "Password123#",
  },
) {
  return await request(app)
    .post("/api/examiner")
    .send(data)
    .set("Content-Type", "application/json");
}

async function getExaminer(id) {
  return await request(app)
    .get(`/api/examiner/${id}`)
    .set("Accept", "application/json");
}

async function deleteExaminer(id) {
  return await request(app).delete(`/api/examiner/${id}`);
}
