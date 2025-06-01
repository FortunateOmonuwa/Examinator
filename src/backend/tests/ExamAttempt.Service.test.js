import { describe, it, expect, beforeEach, afterEach } from "vitest";
import request from "supertest";
import app from "../main.js";
import { getAuthToken, deleteTestExaminer } from "./utils/setup.js";

describe("ExamAttempt API", () => {
  describe("POST /api/exam-attempt/submit", () => {
    it("should create exam attempt successfully with valid exam", async () => {
      // First create an exam to submit attempt for
      const authData = await getAuthToken();
      const { token, examinerId } = authData;

      // Create a test exam
      const examRes = await request(app)
        .post(`/api/exam/${examinerId}`)
        .set("Authorization", `Bearer ${token}`)
        .send({
          exam: {
            title: "Test Exam for Attempt",
            description: "Test exam description",
            stipulatedTime: 60,
            enforceTimeLimit: true,
            questions: [
              {
                text: "What is 2 + 2?",
                type: "singlechoice",
                options: [
                  { text: "3", isCorrect: false },
                  { text: "4", isCorrect: true },
                  { text: "5", isCorrect: false },
                ],
              },
            ],
          },
        })
        .set("Content-Type", "application/json");

      expect(examRes.status).toBe(200);
      const examId = examRes.body.response.body.id;

      // Get exam details to access questions
      const examDetailsRes = await request(app).get(`/api/exam/${examId}`);

      expect(examDetailsRes.status).toBe(200);
      const questions = examDetailsRes.body.response.body.questions;

      // Submit exam attempt
      const attemptData = {
        examId: examId,
        responderEmail: "student@example.com",
        responderName: "Test Student",
        answers: [
          {
            questionId: questions[0].id,
            answer: "1", // Index of correct answer
            questionType: "SINGLECHOICE",
          },
        ],
        totalScore: 100,
      };

      const attemptRes = await request(app)
        .post("/api/exam-attempt/submit")
        .send(attemptData)
        .set("Content-Type", "application/json");

      expect(attemptRes.status).toBe(201);
      expect(attemptRes.body.response.isSuccessful).toBe(true);
      expect(attemptRes.body.response.body.examId).toBe(examId);

      // Clean up
      await request(app)
        .delete(`/api/exam/${examId}`)
        .set("Authorization", `Bearer ${token}`);

      await deleteTestExaminer(examinerId, token);
    });

    it("should return error for missing required fields", async () => {
      const invalidData = {
        examId: "550e8400-e29b-41d4-a716-446655440000",
        // Missing responderEmail and answers
      };

      const attemptRes = await request(app)
        .post("/api/exam-attempt/submit")
        .send(invalidData)
        .set("Content-Type", "application/json");

      expect(attemptRes.status).toBe(400);
      expect(attemptRes.body.response.isSuccessful).toBe(false);
      expect(attemptRes.body.response.message).toContain(
        "Missing required fields"
      );
    });

    it("should return error when exam not found", async () => {
      const attemptData = {
        examId: "550e8400-e29b-41d4-a716-446655440000", // Non-existent exam
        responderEmail: "student@example.com",
        responderName: "Test Student",
        answers: [
          {
            questionId: "550e8400-e29b-41d4-a716-446655440001",
            answer: "1",
            questionType: "SINGLECHOICE",
          },
        ],
        totalScore: 100,
      };

      const attemptRes = await request(app)
        .post("/api/exam-attempt/submit")
        .send(attemptData)
        .set("Content-Type", "application/json");

      expect(attemptRes.status).toBe(404);
      expect(attemptRes.body.response.isSuccessful).toBe(false);
      expect(attemptRes.body.response.message).toBe("Exam not found");
    });
  });

  describe("GET /api/exam-attempt/exam/:examId", () => {
    it("should retrieve exam attempts successfully", async () => {
      // Create exam and submit attempts first
      const authData = await getAuthToken();
      const { token, examinerId } = authData;

      // Create a test exam
      const examRes = await request(app)
        .post(`/api/exam/${examinerId}`)
        .set("Authorization", `Bearer ${token}`)
        .send({
          exam: {
            title: "Test Exam for Attempts",
            description: "Test exam description",
            stipulatedTime: 60,
            enforceTimeLimit: true,
            questions: [
              {
                text: "What is 3 + 3?",
                type: "singlechoice",
                options: [
                  { text: "5", isCorrect: false },
                  { text: "6", isCorrect: true },
                  { text: "7", isCorrect: false },
                ],
              },
            ],
          },
        })
        .set("Content-Type", "application/json");

      expect(examRes.status).toBe(200);
      const examId = examRes.body.response.body.id;

      // Get exam details to access questions
      const examDetailsRes = await request(app).get(`/api/exam/${examId}`);

      expect(examDetailsRes.status).toBe(200);
      const questions = examDetailsRes.body.response.body.questions;

      // Submit an exam attempt
      const attemptData = {
        examId: examId,
        responderEmail: "student1@example.com",
        responderName: "Test Student 1",
        answers: [
          {
            questionId: questions[0].id,
            answer: "1",
            questionType: "SINGLECHOICE",
          },
        ],
        totalScore: 100,
      };

      const attemptRes = await request(app)
        .post("/api/exam-attempt/submit")
        .send(attemptData)
        .set("Content-Type", "application/json");

      expect(attemptRes.status).toBe(201);

      // Get exam attempts (requires authentication)
      const getAttemptsRes = await request(app)
        .get(`/api/exam-attempt/exam/${examId}`)
        .set("Authorization", `Bearer ${token}`);

      expect(getAttemptsRes.status).toBe(200);
      expect(getAttemptsRes.body.response.isSuccessful).toBe(true);
      expect(Array.isArray(getAttemptsRes.body.response.body)).toBe(true);
      expect(getAttemptsRes.body.response.body.length).toBeGreaterThan(0);

      // Clean up
      await request(app)
        .delete(`/api/exam/${examId}`)
        .set("Authorization", `Bearer ${token}`);

      await deleteTestExaminer(examinerId, token);
    });
  });

  describe("GET /api/exam-attempt/:attemptId", () => {
    it("should retrieve exam attempt by ID successfully", async () => {
      // Create exam and submit attempt first
      const authData = await getAuthToken();
      const { token, examinerId } = authData;

      // Create a test exam
      const examRes = await request(app)
        .post(`/api/exam/${examinerId}`)
        .set("Authorization", `Bearer ${token}`)
        .send({
          exam: {
            title: "Test Exam for Attempt Detail",
            description: "Test exam description",
            stipulatedTime: 60,
            enforceTimeLimit: true,
            questions: [
              {
                text: "What is 4 + 4?",
                type: "singlechoice",
                options: [
                  { text: "7", isCorrect: false },
                  { text: "8", isCorrect: true },
                  { text: "9", isCorrect: false },
                ],
              },
            ],
          },
        })
        .set("Content-Type", "application/json");

      expect(examRes.status).toBe(200);
      const examId = examRes.body.response.body.id;

      // Get exam details to access questions
      const examDetailsRes = await request(app).get(`/api/exam/${examId}`);

      expect(examDetailsRes.status).toBe(200);
      const questions = examDetailsRes.body.response.body.questions;

      // Submit an exam attempt
      const attemptData = {
        examId: examId,
        responderEmail: "student2@example.com",
        responderName: "Test Student 2",
        answers: [
          {
            questionId: questions[0].id,
            answer: "1",
            questionType: "SINGLECHOICE",
          },
        ],
        totalScore: 100,
      };

      const attemptRes = await request(app)
        .post("/api/exam-attempt/submit")
        .send(attemptData)
        .set("Content-Type", "application/json");

      expect(attemptRes.status).toBe(201);
      const attemptId = attemptRes.body.response.body.id;

      // Get specific exam attempt (requires authentication)
      const getAttemptRes = await request(app)
        .get(`/api/exam-attempt/${attemptId}`)
        .set("Authorization", `Bearer ${token}`);

      expect(getAttemptRes.status).toBe(200);
      expect(getAttemptRes.body.response.isSuccessful).toBe(true);
      expect(getAttemptRes.body.response.body.id).toBe(attemptId);
      expect(getAttemptRes.body.response.body.examId).toBe(examId);

      // Clean up
      await request(app)
        .delete(`/api/exam/${examId}`)
        .set("Authorization", `Bearer ${token}`);

      await deleteTestExaminer(examinerId, token);
    });

    it("should return error when attempt not found", async () => {
      const authData = await getAuthToken();
      const { token, examinerId } = authData;

      const getAttemptRes = await request(app)
        .get(`/api/exam-attempt/550e8400-e29b-41d4-a716-446655440020`)
        .set("Authorization", `Bearer ${token}`);

      expect(getAttemptRes.status).toBe(404);
      expect(getAttemptRes.body.response.isSuccessful).toBe(false);
      expect(getAttemptRes.body.response.message).toBe(
        "Exam attempt not found"
      );

      // Clean up
      await deleteTestExaminer(examinerId, token);
    });
  });
});
