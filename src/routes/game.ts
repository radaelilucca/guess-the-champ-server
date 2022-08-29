import { Router } from "express";
import { GameController } from "../controllers";

const gameRoutes = Router();

gameRoutes.get("/game/create", GameController.create);

export { gameRoutes };
