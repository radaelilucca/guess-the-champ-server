import { Request, Response } from "express";
import { CreateGameService } from "../services";

class GameController {
  async create(req: Request, res: Response) {
    const newGame = await CreateGameService.createNewGame({
      userId: req.headers.userId as string,
    });

    return res.json({ game: newGame });
  }
}

export default new GameController();
