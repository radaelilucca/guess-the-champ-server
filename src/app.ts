import "dotenv/config";
import express from "express";
import { championsRoutes, gameRoutes } from "./routes";
import cors from "cors";
import { userRoutes } from "./routes/users";

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

app.use("/static", express.static("public"));

app.use(userRoutes);
app.use(gameRoutes);
app.use(championsRoutes);

export { app };
