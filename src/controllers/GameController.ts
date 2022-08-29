import { Response } from "express";
import { CreateGameService } from "../services";

class GameController {
  async create({ res }: { res: Response }) {
    //TODO: GER USER FROM TOKEN;

    const newGame = await CreateGameService.createNewGame();

    return res.json({ game: newGame });
  }
}

export default new GameController();
