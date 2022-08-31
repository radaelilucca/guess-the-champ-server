import { Router } from "express";
import { UserController } from "../controllers";

const userRoutes = Router();

userRoutes.post("/sign-up", (req, res) => {
  UserController.create(req, res);
});

export { userRoutes };
