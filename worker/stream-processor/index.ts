import express from "express";

const app = express();

app.get("/health", (_req, res) => res.status(200).send("ok"));

const port = Number(process.env.PORT) || 3000;

app.listen(port, "0.0.0.0", () => {
  console.log(`Listening on ${port}`);
});
