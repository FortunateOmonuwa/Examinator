import { describe, it, expect, afterAll, beforeAll } from "vitest";
import request from "supertest";
import app from "../../main.js";

//import { createExaminer, deleteExaminer } from "../user/Examiner.test.js";

describe("POST /api/exam/:examinerId", () => {
  it("should create a new exam successfully with valid input", async () => {
    const examRes = await createExam("bab36b65-b024-491a-a9ce-e4449290ee67");
    expect(examRes.status).toBe(200);
    expect(examRes.body.response.isSuccessful).toBe(true);

    const examId = examRes.body.response.body.id;
    console.log(examRes.body.response.body);
    expect(examId).toBeDefined();

    const getExamRes = await getExam(examId);
    expect(getExamRes.status).toBe(200);
    expect(getExamRes.body.response.isSuccessful).toBe(true);
    expect(getExamRes.body.response.body).not.toBeNull();
    expect(getExamRes.body.response.body.id).toBe(examId);

    const deleteExamRes = await deleteExam(examId);
    expect(deleteExamRes.status).toBe(200);
  });
});

//-----------------------------------------------------------

async function createExam(examinerId) {
  return await request(app)
    .post(`/api/exam/${examinerId}`)
    .send({
      exam: {
        title: "Mathematics",
        description: "Mathematics exam",
        stipulatedTime: 60,
        enforceTimeLimit: true,
        questions: [
          {
            text: "What is 2 + 2?",
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

async function deleteExam(examinerId) {
  return await request(app).delete(`/api/exam/${examinerId}`);
}

async function getExam(examinerId) {
  return await request(app).get(`/api/exam/${examinerId}`);
}
