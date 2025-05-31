import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";

// Mock the imports first
vi.mock("../imports/UtilityImports.js", () => ({
  database: {
    Exam: {
      findUnique: vi.fn(),
    },
    ExamAttempt: {
      create: vi.fn(),
      findMany: vi.fn(),
      findUnique: vi.fn(),
    },
    $disconnect: vi.fn(),
  },
}));

vi.mock("../utilities/Response.js", () => ({
  default: {
    Successful: vi.fn((data) => ({ isSuccessful: true, ...data })),
    Unsuccessful: vi.fn((data) => ({ isSuccessful: false, ...data })),
  },
}));

// Import after mocking
import {
  CreateExamAttempt,
  GetExamAttempts,
  GetExamAttemptById,
} from "../functionalities/ExamAttempt/ExamAttempt.Service.js";
import { database } from "../imports/UtilityImports.js";

describe("ExamAttempt Service", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  describe("CreateExamAttempt", () => {
    const validExamAttemptData = {
      examId: "exam-123",
      responderEmail: "test@example.com",
      responderName: "Test User",
      startTime: new Date(),
      submittedAt: new Date(),
      answers: [
        {
          questionId: "question-1",
          answer: "0",
          questionType: "SINGLECHOICE",
        },
      ],
      totalScore: 85,
    };

    const mockExam = {
      id: "exam-123",
      title: "Test Exam",
      questions: [
        {
          id: "question-1",
          type: "SINGLECHOICE",
          options: [
            { id: "option-1", text: "Option A", isCorrect: true },
            { id: "option-2", text: "Option B", isCorrect: false },
          ],
        },
      ],
    };

    it("should create exam attempt successfully", async () => {
      database.Exam.findUnique.mockResolvedValue(mockExam);
      database.ExamAttempt.create.mockResolvedValue({
        id: "attempt-123",
        ...validExamAttemptData,
      });

      const result = await CreateExamAttempt(validExamAttemptData);

      expect(result.isSuccessful).toBe(true);
      expect(database.Exam.findUnique).toHaveBeenCalledWith({
        where: { id: "exam-123" },
        include: {
          questions: {
            include: {
              options: true,
            },
          },
        },
      });
      expect(database.ExamAttempt.create).toHaveBeenCalled();
    });

    it("should return error for missing required fields", async () => {
      const invalidData = {
        examId: "exam-123",
        // Missing responderEmail and answers
      };

      const result = await CreateExamAttempt(invalidData);

      expect(result.isSuccessful).toBe(false);
      expect(result.resultCode).toBe(400);
      expect(result.message).toContain("Missing required fields");
    });

    it("should return error when exam not found", async () => {
      database.Exam.findUnique.mockResolvedValue(null);

      const result = await CreateExamAttempt(validExamAttemptData);

      expect(result.isSuccessful).toBe(false);
      expect(result.resultCode).toBe(404);
      expect(result.message).toBe("Exam not found");
    });

    it("should handle database errors", async () => {
      database.Exam.findUnique.mockRejectedValue(new Error("Database error"));

      const result = await CreateExamAttempt(validExamAttemptData);

      expect(result.isSuccessful).toBe(false);
      expect(result.resultCode).toBe(500);
      expect(result.message).toContain("internal server error");
    });
  });

  describe("GetExamAttempts", () => {
    const examId = "exam-123";
    const mockAttempts = [
      {
        id: "attempt-1",
        examId,
        responderEmal: "user1@example.com",
        totalScore: 85,
      },
      {
        id: "attempt-2",
        examId,
        responderEmal: "user2@example.com",
        totalScore: 92,
      },
    ];

    it("should retrieve exam attempts successfully", async () => {
      database.ExamAttempt.findMany.mockResolvedValue(mockAttempts);

      const result = await GetExamAttempts(examId);

      expect(result.isSuccessful).toBe(true);
      expect(result.body).toEqual(mockAttempts);
      expect(database.ExamAttempt.findMany).toHaveBeenCalledWith({
        where: { examId },
        include: {
          answers: {
            include: {
              options: true,
              question: true,
            },
          },
        },
        orderBy: {
          submittedAt: "desc",
        },
      });
    });

    it("should handle database errors", async () => {
      database.ExamAttempt.findMany.mockRejectedValue(
        new Error("Database error")
      );

      const result = await GetExamAttempts(examId);

      expect(result.isSuccessful).toBe(false);
      expect(result.resultCode).toBe(500);
    });
  });

  describe("GetExamAttemptById", () => {
    const attemptId = "attempt-123";
    const mockAttempt = {
      id: attemptId,
      examId: "exam-123",
      responderEmal: "test@example.com",
      totalScore: 85,
    };

    it("should retrieve exam attempt by ID successfully", async () => {
      database.ExamAttempt.findUnique.mockResolvedValue(mockAttempt);

      const result = await GetExamAttemptById(attemptId);

      expect(result.isSuccessful).toBe(true);
      expect(result.body).toEqual(mockAttempt);
      expect(database.ExamAttempt.findUnique).toHaveBeenCalledWith({
        where: { id: attemptId },
        include: {
          answers: {
            include: {
              options: true,
              question: true,
            },
          },
          exam: {
            include: {
              questions: {
                include: {
                  options: true,
                },
              },
            },
          },
        },
      });
    });

    it("should return error when attempt not found", async () => {
      database.ExamAttempt.findUnique.mockResolvedValue(null);

      const result = await GetExamAttemptById(attemptId);

      expect(result.isSuccessful).toBe(false);
      expect(result.resultCode).toBe(404);
      expect(result.message).toBe("Exam attempt not found");
    });

    it("should handle database errors", async () => {
      database.ExamAttempt.findUnique.mockRejectedValue(
        new Error("Database error")
      );

      const result = await GetExamAttemptById(attemptId);

      expect(result.isSuccessful).toBe(false);
      expect(result.resultCode).toBe(500);
    });
  });
});
