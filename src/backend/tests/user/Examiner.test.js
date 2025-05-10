import request from "supertest";
import app from "../../main";

describe("POST /api/examiner/register", () => {
  it("should register a new examiner successfully with valid input", async () => {
    const response = await request(app)
      .post("/api/examiner/register")
      .send({
        firstname: "John",
        lastname: "Doe",
        email: "johndoe@example.com",
        password: "Password123",
      })
      .set("Content-Type", "application/json");

    expect(response.status).toBe(200);
    expect(response.body.response.isSuccessful).toBe(true);
  });

  it("should return 400 for missing fields", async () => {
    const response = await request(app)
      .post("/api/examiner/register")
      .send({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
      })
      .set("Content-Type", "application/json");

    expect(response.status).toBe(400);
    expect(response.body.response.isSuccessful).toBe(false);
  });

  it("should return 400 for invalid email format", async () => {
    const response = await request(app)
      .post("/api/examiner/register")
      .send({
        firstname: "John",
        lastname: "Doe",
        email: "invalid-email",
        password: "Password123",
      })
      .set("Content-Type", "application/json");

    expect(response.status).toBe(400);
  });
});

describe("GET /api/examiner/profile/:id", () => {
  it("should return examiner profile for valid id", async () => {
    const response = await request(app)
      .get("/api/examiner/profile/2")
      .set("Accept", "application/json");

    expect(response.status).toBe(200);
    expect(response.body.response.isSuccessful).toBe(true);
    expect(response.body.response.data).toHaveProperty("id", 2);
  });

  it("should return 404 for non-existing id", async () => {
    const response = await request(app)
      .get("/api/examiner/profile/99999")
      .set("Accept", "application/json");

    expect(response.status).toBe(404);
    expect(response.body.response.isSuccessful).toBe(false);
  });
});
