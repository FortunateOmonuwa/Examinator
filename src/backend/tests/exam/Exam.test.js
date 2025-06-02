import { describe, it, expect } from "vitest";
import request from "supertest";
import app from "../../main.js";
import { getAuthToken, deleteTestExaminer } from "../utils/setup.js";

describe("POST /api/exam/:examinerId", () => {
  it("should create a new exam successfully with valid input", async () => {
    // Get authentication token and examiner ID
    const authData = await getAuthToken();
    const { token, examinerId } = authData;

    const examRes = await createExam(examinerId, token);

    // Debug: Log the response if it fails
    if (examRes.status !== 200) {
      // console.log("Exam creation failed:");
      // console.log("Status:", examRes.status);
      // console.log("Response:", JSON.stringify(examRes.body, null, 2));
    }

    expect(examRes.status).toBe(200);
    expect(examRes.body.response.isSuccessful).toBe(true);

    const examId = examRes.body.response.body.id;
    // console.log(examRes.body.response.body);
    expect(examId).toBeDefined();

    const getExamRes = await getExam(examId);
    expect(getExamRes.status).toBe(200);
    expect(getExamRes.body.response.isSuccessful).toBe(true);
    expect(getExamRes.body.response.body).not.toBeNull();
    expect(getExamRes.body.response.body.id).toBe(examId);

    const deleteExamRes = await deleteExam(examId, token);
    expect(deleteExamRes.status).toBe(200);

    // Clean up test examiner
    await deleteTestExaminer(examinerId, token);
  });
});

describe("GET /api/exam/public", () => {
  it("should get public exams successfully without authentication", async () => {
    const response = await request(app)
      .get("/api/exam/public")
      .set("Content-Type", "application/json");

    expect(response.status).toBe(200);
    expect(response.body.response.isSuccessful).toBe(true);
    expect(Array.isArray(response.body.response.body)).toBe(true);
  });

  it("should filter public exams by subject", async () => {
    const response = await request(app)
      .get("/api/exam/public?subject=JavaScript")
      .set("Content-Type", "application/json");

    expect(response.status).toBe(200);
    expect(response.body.response.isSuccessful).toBe(true);
    expect(Array.isArray(response.body.response.body)).toBe(true);
  });

  it("should return empty array when no public exams match subject", async () => {
    const response = await request(app)
      .get("/api/exam/public?subject=NonExistentSubject12345")
      .set("Content-Type", "application/json");

    expect(response.status).toBe(200);
    expect(response.body.response.isSuccessful).toBe(true);
    expect(Array.isArray(response.body.response.body)).toBe(true);
    expect(response.body.response.body.length).toBe(0);
  });
});

describe("GET /api/exam/exams/:id", () => {
  it("should get all exams for examiner successfully", async () => {
    const authData = await getAuthToken();
    const { token, examinerId } = authData;

    const response = await request(app)
      .get(`/api/exam/exams/${examinerId}`)
      .set("Authorization", `Bearer ${token}`)
      .set("Content-Type", "application/json");

    expect(response.status).toBe(200);
    expect(response.body.response.isSuccessful).toBe(true);
    expect(Array.isArray(response.body.response.body)).toBe(true);

    // Clean up
    await deleteTestExaminer(examinerId, token);
  });

  it("should return 401 for missing authentication", async () => {
    const response = await request(app)
      .get("/api/exam/exams/some-examiner-id")
      .set("Content-Type", "application/json");

    expect(response.status).toBe(401);
    expect(response.body.isSuccessful).toBe(false);
    expect(response.body.message).toBe("Unauthorized");
  });
});

describe("DELETE /api/exam/:id", () => {
  it("should delete exam successfully", async () => {
    const authData = await getAuthToken();
    const { token, examinerId } = authData;

    // First create an exam to delete
    const examRes = await createExam(examinerId, token);
    expect(examRes.status).toBe(200);
    const examId = examRes.body.response.body.id;

    // Now delete the exam
    const deleteResponse = await request(app)
      .delete(`/api/exam/${examId}`)
      .set("Authorization", `Bearer ${token}`)
      .set("Content-Type", "application/json");

    expect(deleteResponse.status).toBe(200);
    expect(deleteResponse.body.response.isSuccessful).toBe(true);

    // Verify exam is deleted by trying to get it
    const getResponse = await request(app)
      .get(`/api/exam/${examId}`)
      .set("Content-Type", "application/json");

    expect(getResponse.status).toBe(400);

    // Clean up
    await deleteTestExaminer(examinerId, token);
  });

  it("should return 401 for missing authentication", async () => {
    const response = await request(app)
      .delete("/api/exam/some-exam-id")
      .set("Content-Type", "application/json");

    expect(response.status).toBe(401);
    expect(response.body.isSuccessful).toBe(false);
    expect(response.body.message).toBe("Unauthorized");
  });

  it("should return 404 for non-existent exam", async () => {
    const authData = await getAuthToken();
    const { token, examinerId } = authData;

    const response = await request(app)
      .delete("/api/exam/550e8400-e29b-41d4-a716-446655440000")
      .set("Authorization", `Bearer ${token}`)
      .set("Content-Type", "application/json");

    expect(response.status).toBe(404);
    expect(response.body.response.isSuccessful).toBe(false);
    expect(response.body.response.message).toBe("Exam not found");

    // Clean up
    await deleteTestExaminer(examinerId, token);
  });
});

//-----------------------------------------------------------

async function createExam(examinerId, token) {
  return await request(app)
    .post(`/api/exam/${examinerId}`)
    .set("Authorization", `Bearer ${token}`)
    .send({
      exam: {
        title: "Mathematics",
        description: "Mathematics exam",
        stipulatedTime: 60,
        enforceTimeLimit: true,
        questions: [
          {
            text: "What is 2 + 2?",
            type: "singlechoice",
            options: [
              {
                text: "4",
                isCorrect: true,
              },
              {
                text: "5",
                isCorrect: false,
              },
              {
                text: "7",
                isCorrect: false,
              },
            ],
          },
          {
            text: "What is 2 + 3?",
            type: "singlechoice",
            options: [
              {
                text: "4",
                isCorrect: false,
              },
              {
                text: "5",
                isCorrect: true,
              },
              {
                text: "7",
                isCorrect: false,
              },
            ],
          },
        ],
      },
    })
    .set("Content-Type", "application/json");
}

async function deleteExam(examId, token) {
  return await request(app)
    .delete(`/api/exam/${examId}`)
    .set("Authorization", `Bearer ${token}`);
}

async function getExam(examId) {
  return await request(app).get(`/api/exam/${examId}`);
}
