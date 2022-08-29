import "dotenv/config";
import express from "express";
import { championsRoutes, gameRoutes } from "./routes";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use("/static", express.static("public"));

app.use(gameRoutes);
app.use(championsRoutes);

export { app };
