import {
  matchesRepository,
  usersRepository,
} from "../../database/repositories";
import { verbose } from "../../utils";

interface IGuessServiceProps {
  matchId: string;
  championName: string;
}

class Service {
  async execute({ matchId, championName }: IGuessServiceProps) {
    try {
      const match = await matchesRepository.findOneBy({ id: matchId });

      if (!match) throw "Match not found";

      if (match.status === "finished") throw "Match already finished";

      const parsedChampionName = championName.toLowerCase();

      const isCorrect = parsedChampionName === match.champion;

      const matchScore = Number(match.score);

      if (isCorrect) {
        match.status = "finished";

        const user = await usersRepository.findOneBy({ id: match.userId });

        if (user) {
          user.totalScore += matchScore;
          await usersRepository.save(user);
        }
      } else {
        if (matchScore !== 1) {
          const newMatchScore = matchScore - 1;
          match.score = newMatchScore;
        }
      }

      await matchesRepository.save(match);

      return { isCorrect, matchScore: match.score };
    } catch (error) {
      verbose.error({ id: "Error on Guess service", data: error });
      throw error;
    }
  }
}

export const GuessService = new Service();
