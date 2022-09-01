import { Request, Response } from "express";
import * as yup from "yup";
import { UserEntity } from "../database/entities";
import { usersRepository } from "../database/repositories";
import { CreateSessionService, CreateUserService } from "../services";
import { verbose } from "../utils";

const createValidationSchema = yup.object().shape({
  username: yup
    .string()
    .max(15, "Username must have max 15 chars")
    .required("Username is required"),
  password: yup
    .string()
    .min(8, "Username must have at least 8 chars")
    .max(30, "Username must have max 30 chars")
    .required("Password is required"),
});

class UserController {
  async create(req: Request, res: Response) {
    const { username, password } = req.body;

    try {
      await createValidationSchema.validate({ username, password });
    } catch (error: any) {
      verbose.error({ id: "User controller - create/validation", data: error });

      return res
        .status(400)
        .json({ error: "Error on user creation", details: error.message });
    }

    try {
      const newUser = await CreateUserService.execute({ username, password });

      const session = await CreateSessionService.execute({
        user: newUser,
      });

      return res.json(session);
    } catch (error: any) {
      const errorMessage = error.includes("exists")
        ? "Username already taken"
        : error;
      verbose.error({ id: "User controller - create", data: errorMessage });
      return res
        .status(400)
        .json({ error: "Error on user creation", details: errorMessage });
    }
  }

  async find(req: Request, res: Response) {
    console.log(req.query, req.params);

    const { id } = req.params;

    if (!id) throw new Error("Missing user Id");

    const userData: Partial<UserEntity> | null =
      await usersRepository.findOneBy({ id });

    if (!userData) throw new Error("User not found");

    delete userData.password;

    return res.json({ user: userData });
  }
}

export default new UserController();
