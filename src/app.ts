import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Welcom to Rasoify Auth Service!");
});

export default app;
