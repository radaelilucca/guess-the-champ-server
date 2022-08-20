import "dotenv/config";
import express from "express";

const app = express();

app.use("/static", express.static("public"));

export { app };
