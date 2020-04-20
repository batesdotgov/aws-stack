const request = require("supertest");

const app = require("../src/server/app");

describe("Routes Work", () => {
  it("should return hello world", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual("hello world");
  });
});
