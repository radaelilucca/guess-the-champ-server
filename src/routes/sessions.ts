import { Router } from "express";
import { SessionController } from "../controllers";

const sessionRoutes = Router();

sessionRoutes.post("/login", SessionController.create);

export { sessionRoutes };
