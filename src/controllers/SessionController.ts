import { Request, Response } from "express";
import { CreateSessionService } from "../services";
import { verbose } from "../utils";

class SessionController {
  async create(req: Request, res: Response) {
    const { username, password } = req.body;

    try {
      const { token, user } = await CreateSessionService.execute({
        username,
        password,
      });

      return res.json({ token, user });
    } catch (error) {
      verbose.error({ id: "Session Controller - create", data: error });

      return res.status(401).json({ error: `Login fail`, details: error });
    }
  }
}

export default new SessionController();
