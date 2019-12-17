import request from "supertest";
import app from '../examples/express';

describe("GET /telescope", () => {
  it("should return 200 OK", () => {
    return request(app).get("/telescope")
      .expect(200);
  });
});
