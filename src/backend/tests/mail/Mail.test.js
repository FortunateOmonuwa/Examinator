import { describe, it, expect, beforeAll, afterAll, vi } from "vitest";
import request from "supertest";
import app from "../../main.js";

// Mock the mailer service to avoid sending actual emails during tests
vi.mock("../../integrations/mailer.service.js", () => ({
  sendMail: vi.fn().mockResolvedValue(true),
}));

describe("Mail API", () => {
  describe("POST /api/mailer/send-exam-link", () => {
    it("should send exam link to single recipient successfully", async () => {
      const testData = {
        receiver: "test@example.com",
        name: "John Doe",
        examName: "Math Test",
        link: "https://example.com/exam/123",
      };

      const response = await request(app)
        .post("/api/mailer/send-exam-link")
        .send(testData)
        .set("Content-Type", "application/json");

      expect(response.status).toBe(200);
      expect(response.body.response.isSuccessful).toBe(true);
      expect(response.body.response.message).toBe(
        "Exam link mail sent successfully"
      );
    });

    it("should send exam link to multiple recipients successfully", async () => {
      const testData = {
        recipients: [
          "test1@example.com",
          "test2@example.com",
          "test3@example.com",
        ],
        name: "John Doe",
        examName: "Math Test",
        link: "https://example.com/exam/123",
      };

      const response = await request(app)
        .post("/api/mailer/send-exam-link")
        .send(testData)
        .set("Content-Type", "application/json");

      expect(response.status).toBe(200);
      expect(response.body.response.isSuccessful).toBe(true);
      expect(response.body.response.message).toBe(
        "Exam link mail sent successfully"
      );
    });

    it("should handle backward compatibility with receiver field", async () => {
      const testData = {
        receiver: ["test1@example.com", "test2@example.com"],
        name: "John Doe",
        examName: "Math Test",
        link: "https://example.com/exam/123",
      };

      const response = await request(app)
        .post("/api/mailer/send-exam-link")
        .send(testData)
        .set("Content-Type", "application/json");

      expect(response.status).toBe(200);
      expect(response.body.response.isSuccessful).toBe(true);
    });

    it("should return 400 for missing recipients", async () => {
      const testData = {
        name: "John Doe",
        examName: "Math Test",
        link: "https://example.com/exam/123",
      };

      const response = await request(app)
        .post("/api/mailer/send-exam-link")
        .send(testData)
        .set("Content-Type", "application/json");

      expect(response.status).toBe(400);
      expect(response.body.response.isSuccessful).toBe(false);
      expect(response.body.response.message).toBe("Recipients are required");
    });

    it("should return 400 for missing name", async () => {
      const testData = {
        recipients: ["test@example.com"],
        examName: "Math Test",
        link: "https://example.com/exam/123",
      };

      const response = await request(app)
        .post("/api/mailer/send-exam-link")
        .send(testData)
        .set("Content-Type", "application/json");

      expect(response.status).toBe(400);
      expect(response.body.response.isSuccessful).toBe(false);
      expect(response.body.response.message).toBe(
        "Name, examName, and link are required"
      );
    });

    it("should return 400 for missing examName", async () => {
      const testData = {
        recipients: ["test@example.com"],
        name: "John Doe",
        link: "https://example.com/exam/123",
      };

      const response = await request(app)
        .post("/api/mailer/send-exam-link")
        .send(testData)
        .set("Content-Type", "application/json");

      expect(response.status).toBe(400);
      expect(response.body.response.isSuccessful).toBe(false);
      expect(response.body.response.message).toBe(
        "Name, examName, and link are required"
      );
    });

    it("should return 400 for missing link", async () => {
      const testData = {
        recipients: ["test@example.com"],
        name: "John Doe",
        examName: "Math Test",
      };

      const response = await request(app)
        .post("/api/mailer/send-exam-link")
        .send(testData)
        .set("Content-Type", "application/json");

      expect(response.status).toBe(400);
      expect(response.body.response.isSuccessful).toBe(false);
      expect(response.body.response.message).toBe(
        "Name, examName, and link are required"
      );
    });

    it("should handle empty recipients array", async () => {
      const testData = {
        recipients: [],
        name: "John Doe",
        examName: "Math Test",
        link: "https://example.com/exam/123",
      };

      const response = await request(app)
        .post("/api/mailer/send-exam-link")
        .send(testData)
        .set("Content-Type", "application/json");

      expect(response.status).toBe(500);
      expect(response.body.response.isSuccessful).toBe(false);
      expect(response.body.response.message).toBe(
        "Failed to send exam link mail. No recipient provided"
      );
    });
  });

  describe("POST /api/mailer/send-exam-results", () => {
    it("should send exam results successfully", async () => {
      const testData = {
        receiver: "test@example.com",
        name: "John Doe",
        examName: "Math Test",
        link: "https://example.com/results/123",
      };

      const response = await request(app)
        .post("/api/mailer/send-exam-results")
        .send(testData)
        .set("Content-Type", "application/json");

      expect(response.status).toBe(200);
      expect(response.body.response.isSuccessful).toBe(true);
      expect(response.body.response.message).toBe(
        "Exam results mail sent successfully"
      );
    });
  });

  describe("POST /api/mailer/send-confirmation", () => {
    it("should send confirmation mail successfully", async () => {
      const testData = {
        receiver: "test@example.com",
        name: "John Doe",
        confirmationToken: "abc123token",
      };

      const response = await request(app)
        .post("/api/mailer/send-confirmation")
        .send(testData)
        .set("Content-Type", "application/json");

      expect(response.status).toBe(200);
      expect(response.body.response.isSuccessful).toBe(true);
      expect(response.body.response.message).toBe(
        "Confirm mail sent successfully"
      );
    });
  });

  describe("POST /api/mailer/send-reset-password", () => {
    it("should send reset password mail successfully", async () => {
      const testData = {
        receiver: "test@example.com",
        name: "John Doe",
        resetToken: "reset123token",
      };

      const response = await request(app)
        .post("/api/mailer/send-reset-password")
        .send(testData)
        .set("Content-Type", "application/json");

      expect(response.status).toBe(200);
      expect(response.body.response.isSuccessful).toBe(true);
      expect(response.body.response.message).toBe(
        "Reset password mail sent successfully"
      );
    });
  });
});
