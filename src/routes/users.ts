import { Router } from "express";
import { UserController } from "../controllers";

const userRoutes = Router();

userRoutes.post("/sign-up", UserController.create);

userRoutes.get("/users/:id", UserController.find);

export { userRoutes };
