import { describe, it, expect } from "@jest/globals";
import { calcDiscount } from "./src/utils";
import request from "supertest";
import app from "./src/app";

describe("App", () => {
  it("should return correct discount amount", () => {
    const discount = calcDiscount(100, 10);
    expect(discount).toBe(10);
  });

  it("should return the welcome message", async () => {
    const response = await request(app).get("/").send();
    expect(response.statusCode).toBe(200);
    expect(response.text).toContain("Welcome to Rasoify Auth Service!");
  });
});
