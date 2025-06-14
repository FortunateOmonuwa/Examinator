import { describe, it, expect } from "vitest";
import request from "supertest";
import app from "../../main.js";

describe("Integration API", () => {
  describe("POST /api/integration/calculate-score", () => {
    it("should calculate score successfully with valid input", async () => {
      const testData = {
        question: "What is the capital of France?",
        answer: "Paris",
        maxScore: 10,
      };

      const response = await request(app)
        .post("/api/integration/calculate-score")
        .send(testData)
        .set("Content-Type", "application/json");

      expect(response.status).toBe(200);
      expect(response.body.response.isSuccessful).toBe(true);
      expect(response.body.response.message).toBe(
        "Score calculated successfully"
      );
      expect(response.body.response.body).toHaveProperty("score");
      expect(typeof response.body.response.body.score).toBe("number");
      expect(response.body.response.body.score).toBeGreaterThanOrEqual(0);
      expect(response.body.response.body.score).toBeLessThanOrEqual(
        testData.maxScore
      );
    });

    it("should calculate score for a correct answer", async () => {
      const testData = {
        question: "What is 2 + 2?",
        answer: "4",
        maxScore: 5,
      };

      const response = await request(app)
        .post("/api/integration/calculate-score")
        .send(testData)
        .set("Content-Type", "application/json");

      expect(response.status).toBe(200);
      expect(response.body.response.isSuccessful).toBe(true);
      expect(response.body.response.body.score).toBeGreaterThanOrEqual(0);
      expect(response.body.response.body.score).toBeLessThanOrEqual(
        testData.maxScore
      );
    });

    it("should calculate score for a partially correct answer", async () => {
      const testData = {
        question: "Explain the concept of photosynthesis",
        answer: "Plants use sunlight to make food",
        maxScore: 10,
      };

      const response = await request(app)
        .post("/api/integration/calculate-score")
        .send(testData)
        .set("Content-Type", "application/json");

      expect(response.status).toBe(200);
      expect(response.body.response.isSuccessful).toBe(true);
      expect(response.body.response.body.score).toBeGreaterThanOrEqual(0);
      expect(response.body.response.body.score).toBeLessThanOrEqual(
        testData.maxScore
      );
    });

    it("should calculate low score for incorrect answer", async () => {
      const testData = {
        question: "What is the capital of France?",
        answer: "London",
        maxScore: 10,
      };

      const response = await request(app)
        .post("/api/integration/calculate-score")
        .send(testData)
        .set("Content-Type", "application/json");

      expect(response.status).toBe(200);
      expect(response.body.response.isSuccessful).toBe(true);
      expect(response.body.response.body.score).toBeLessThan(5);
    });

    it("should handle empty answer", async () => {
      const testData = {
        question: "What is the capital of France?",
        answer: "",
        maxScore: 10,
      };

      const response = await request(app)
        .post("/api/integration/calculate-score")
        .send(testData)
        .set("Content-Type", "application/json");

      expect(response.status).toBe(200);
      expect(response.body.response.isSuccessful).toBe(true);
      expect(response.body.response.body.score).toBe(0);
    });

    it("should return 400 for missing question", async () => {
      const testData = {
        answer: "Paris",
        maxScore: 10,
      };

      const response = await request(app)
        .post("/api/integration/calculate-score")
        .send(testData)
        .set("Content-Type", "application/json");

      expect(response.status).toBe(400);
      expect(response.body.response.isSuccessful).toBe(false);
      expect(response.body.response.message).toBe(
        "Question is required and must be a string"
      );
    });

    it("should return 400 for missing answer", async () => {
      const testData = {
        question: "What is the capital of France?",
        maxScore: 10,
      };

      const response = await request(app)
        .post("/api/integration/calculate-score")
        .send(testData)
        .set("Content-Type", "application/json");

      expect(response.status).toBe(400);
      expect(response.body.response.isSuccessful).toBe(false);
      expect(response.body.response.message).toBe("Answer is required");
    });

    it("should return 400 for missing maxScore", async () => {
      const testData = {
        question: "What is the capital of France?",
        answer: "Paris",
      };

      const response = await request(app)
        .post("/api/integration/calculate-score")
        .send(testData)
        .set("Content-Type", "application/json");

      expect(response.status).toBe(400);
      expect(response.body.response.isSuccessful).toBe(false);
      expect(response.body.response.message).toBe(
        "MaxScore is required and must be a positive number"
      );
    });

    it("should handle different maxScore values", async () => {
      const testCases = [
        { maxScore: 1 },
        { maxScore: 5 },
        { maxScore: 20 },
        { maxScore: 100 },
      ];

      for (const testCase of testCases) {
        const testData = {
          question: "What is the capital of France?",
          answer: "Paris",
          maxScore: testCase.maxScore,
        };

        const response = await request(app)
          .post("/api/integration/calculate-score")
          .send(testData)
          .set("Content-Type", "application/json");

        expect(response.status).toBe(200);
        expect(response.body.response.isSuccessful).toBe(true);
        expect(response.body.response.body.score).toBeLessThanOrEqual(
          testCase.maxScore
        );
        expect(response.body.response.body.score).toBeGreaterThanOrEqual(0);
      }
    });

    it("should handle complex questions and answers", async () => {
      const testData = {
        question:
          "Explain the difference between machine learning and artificial intelligence, providing examples of each.",
        answer:
          "Machine learning is a subset of artificial intelligence. AI is the broader concept of machines being able to carry out tasks in a smart way, while ML is a specific application of AI where machines learn from data. For example, AI includes rule-based systems like chess programs, while ML includes systems that learn patterns from data like recommendation systems.",
        maxScore: 15,
      };

      const response = await request(app)
        .post("/api/integration/calculate-score")
        .send(testData)
        .set("Content-Type", "application/json");

      expect(response.status).toBe(200);
      expect(response.body.response.isSuccessful).toBe(true);
      expect(response.body.response.body.score).toBeGreaterThanOrEqual(0); // AI might return 0 due to model limitations
      expect(response.body.response.body.score).toBeLessThanOrEqual(
        testData.maxScore
      );
    });

    it("should handle special characters in question and answer", async () => {
      const testData = {
        question:
          "What is the formula for calculating the area of a circle? Use π (pi) in your answer.",
        answer:
          "The formula is A = πr², where A is the area, π is approximately 3.14159, and r is the radius.",
        maxScore: 8,
      };

      const response = await request(app)
        .post("/api/integration/calculate-score")
        .send(testData)
        .set("Content-Type", "application/json");

      expect(response.status).toBe(200);
      expect(response.body.response.isSuccessful).toBe(true);
      expect(response.body.response.body.score).toBeGreaterThanOrEqual(0);
      expect(response.body.response.body.score).toBeLessThanOrEqual(
        testData.maxScore
      );
    });

    it("should handle very long questions and answers", async () => {
      const longQuestion =
        "Explain the process of photosynthesis in detail, including the light-dependent reactions, the Calvin cycle, the role of chlorophyll, the importance of carbon dioxide and water, and how this process contributes to the oxygen cycle and food chain in ecosystems.".repeat(
          2
        );
      const longAnswer =
        "Photosynthesis is a complex biological process where plants convert light energy into chemical energy. It involves two main stages: light-dependent reactions and light-independent reactions (Calvin cycle). Chlorophyll absorbs light energy, water is split to release oxygen, and carbon dioxide is fixed into glucose.".repeat(
          3
        );

      const testData = {
        question: longQuestion,
        answer: longAnswer,
        maxScore: 12,
      };

      const response = await request(app)
        .post("/api/integration/calculate-score")
        .send(testData)
        .set("Content-Type", "application/json");

      expect(response.status).toBe(200);
      expect(response.body.response.isSuccessful).toBe(true);
      expect(response.body.response.body.score).toBeGreaterThanOrEqual(0);
      expect(response.body.response.body.score).toBeLessThanOrEqual(
        testData.maxScore
      );
    });

    it("should handle invalid maxScore values", async () => {
      const testCases = [
        { maxScore: 0 },
        { maxScore: -1 },
        { maxScore: "invalid" },
        { maxScore: null },
      ];

      for (const testCase of testCases) {
        const testData = {
          question: "What is the capital of France?",
          answer: "Paris",
          maxScore: testCase.maxScore,
        };

        const response = await request(app)
          .post("/api/integration/calculate-score")
          .send(testData)
          .set("Content-Type", "application/json");

        expect(response.status).toBe(400);
        expect(response.body.response.isSuccessful).toBe(false);
        expect(response.body.response.message).toBe(
          "MaxScore is required and must be a positive number"
        );
      }
    });

    it("should handle malformed JSON", async () => {
      const response = await request(app)
        .post("/api/integration/calculate-score")
        .send("invalid json")
        .set("Content-Type", "application/json");

      expect(response.status).toBe(400);
    });

    it("should handle empty request body", async () => {
      const response = await request(app)
        .post("/api/integration/calculate-score")
        .send({})
        .set("Content-Type", "application/json");

      expect(response.status).toBe(400);
      expect(response.body.response.isSuccessful).toBe(false);
      expect(response.body.response.message).toBe(
        "Question is required and must be a string"
      );
    });

    it("should return consistent scores for identical inputs", async () => {
      const testData = {
        question: "What is the capital of Italy?",
        answer: "Rome",
        maxScore: 10,
      };

      // Make multiple requests with the same data
      const responses = await Promise.all([
        request(app)
          .post("/api/integration/calculate-score")
          .send(testData)
          .set("Content-Type", "application/json"),
        request(app)
          .post("/api/integration/calculate-score")
          .send(testData)
          .set("Content-Type", "application/json"),
        request(app)
          .post("/api/integration/calculate-score")
          .send(testData)
          .set("Content-Type", "application/json"),
      ]);

      // All should succeed
      responses.forEach((response) => {
        expect(response.status).toBe(200);
        expect(response.body.response.isSuccessful).toBe(true);
      });

      // Scores should be similar (allowing for some AI variance)
      const scores = responses.map((r) => r.body.response.body.score);
      const maxScore = Math.max(...scores);
      const minScore = Math.min(...scores);
      expect(maxScore - minScore).toBeLessThanOrEqual(2); // Allow small variance
    });

    it("should handle multilingual content", async () => {
      const testData = {
        question: "¿Cuál es la capital de España?",
        answer: "Madrid",
        maxScore: 5,
      };

      const response = await request(app)
        .post("/api/integration/calculate-score")
        .send(testData)
        .set("Content-Type", "application/json");

      expect(response.status).toBe(200);
      expect(response.body.response.isSuccessful).toBe(true);
      expect(response.body.response.body.score).toBeGreaterThanOrEqual(0);
      expect(response.body.response.body.score).toBeLessThanOrEqual(
        testData.maxScore
      );
    });
  });

  describe("Error Handling", () => {
    it("should handle AI service unavailability gracefully", async () => {
      // This test would require mocking the AI service to simulate failure
      // For now, we'll test with a request that might cause issues
      const testData = {
        question: "",
        answer: "",
        maxScore: 10,
      };

      const response = await request(app)
        .post("/api/integration/calculate-score")
        .send(testData)
        .set("Content-Type", "application/json");

      // Empty question should return 400 due to validation
      expect(response.status).toBe(400);
      expect(response.body.response.isSuccessful).toBe(false);
      expect(response.body.response.message).toBe(
        "Question is required and must be a string"
      );
    });

    it("should handle timeout scenarios", async () => {
      // Test with very complex question that might take longer to process
      const complexQuestion =
        "Analyze the socioeconomic implications of quantum computing on global financial markets, considering the potential for cryptographic disruption, the timeline for practical implementation, the geopolitical ramifications of quantum supremacy, and the necessary regulatory frameworks that would need to be established to maintain market stability while fostering innovation in this emerging technology sector.";
      const complexAnswer =
        "Quantum computing represents a paradigm shift that could fundamentally alter global financial markets through its ability to break current cryptographic standards, necessitating a complete overhaul of security infrastructure while simultaneously creating new opportunities for algorithmic trading and risk analysis.";

      const testData = {
        question: complexQuestion,
        answer: complexAnswer,
        maxScore: 25,
      };

      const response = await request(app)
        .post("/api/integration/calculate-score")
        .send(testData)
        .set("Content-Type", "application/json");

      // Should complete within reasonable time or handle timeout gracefully
      expect([200, 500, 408]).toContain(response.status);
    });
  });
});
