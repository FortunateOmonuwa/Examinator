import { describe, it, expect, afterAll, beforeAll } from "vitest";
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
