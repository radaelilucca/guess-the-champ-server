import { Router } from "express";
import { GameController } from "../controllers";

const gameRoutes = Router();

gameRoutes.get("/game/create", GameController.create);
gameRoutes.post("/game/guess/:id", GameController.guess);

export { gameRoutes };
