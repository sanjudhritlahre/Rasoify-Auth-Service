import express, {
  type NextFunction,
  type Request,
  type Response,
} from "express";
import type { HttpError } from "http-errors";
import logger from "./config/logger.ts";

const app = express();

app.get("/", (req, res) => {
  res.send("Welcom to Rasoify Auth Service!");
});

// Global Error Handler
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: HttpError, req: Request, res: Response, next: NextFunction) => {
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
