import { Request, Response } from "express";
import { CreateUserService } from "../services/users/CreateUser";
import * as yup from "yup";
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
      return res.json({ newUser });
    } catch (error) {
      verbose.error({ id: "User controller - create", data: error });
      return res
        .status(400)
        .json({ error: "Error on user creation", details: error });
    }
  }
}

export default new UserController();
