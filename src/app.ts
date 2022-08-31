import "dotenv/config";
import express from "express";
import { championsRoutes, gameRoutes, sessionRoutes } from "./routes";
import cors from "cors";
import { userRoutes } from "./routes/users";
import { AuthMiddleware } from "./middlewares";

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

app.use("/static", express.static("public"));

app.use(sessionRoutes);
app.use(userRoutes);

app.use(AuthMiddleware.verify);
app.use(gameRoutes);
app.use(championsRoutes);

export { app };
