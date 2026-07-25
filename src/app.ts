import express, { NextFunction, Request, Response } from "express";
import type { HttpError } from "http-errors";
import logger from "./config/logger";
import authRouter from "./routes/auth.route";

const app = express();

app.get("/", (_req, res) => {
  res.send("Welcome to Rasoify Auth Service!");
});

app.use("/auth", authRouter);

// Global Error Handler
app.use((err: HttpError, _req: Request, res: Response, next: NextFunction) => {
  void next;
  logger.error(err.message);
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    errors: [
      {
        type: err.name,
        msg: err.message,
        path: "",
        location: "",
      },
    ],
  });
});

export default app;
