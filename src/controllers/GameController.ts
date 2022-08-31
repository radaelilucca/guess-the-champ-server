import { Request, Response } from "express";
import { CreateGameService, GuessService } from "../services";

class GameController {
  async create(req: Request, res: Response) {
    //TODO: Refactor this CreateGame...
    const newGame = await CreateGameService.createNewGame({
      userId: req.headers.userId as string,
    });

    return res.json(newGame);
  }

  async guess(req: Request, res: Response) {
    const { id: matchId } = req.params;
    const { champion } = req.body;

    try {
      const { isCorrect } = await GuessService.execute({
        matchId: matchId,
        championName: champion,
      });
      return res.json({ isCorrect });
    } catch (error) {
      return res.status(400).json({ error });
    }
  }
}

export default new GameController();
