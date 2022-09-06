import { matchesRepository } from "../../database/repositories";

interface IFinishServiceProps {
  id: string;
}

class Service {
  async execute({ id }: IFinishServiceProps) {
    const match = await matchesRepository.singlePlayer.findOneBy({ id });

    try {
      if (match) {
        match.status = "finished";

        await matchesRepository.singlePlayer.save(match);
      }
    } catch (error) {
      throw "Match not found";
    }
  }
}

export const FinishMatchService = new Service();
