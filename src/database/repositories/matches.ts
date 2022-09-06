import { AppDataSource } from "..";
import { MultiplayerMatchEntity } from "../entities";

import { SinglePlayerMachEntity } from "../entities/SinglePlayerMatch";

const matchesRepository = {
  singlePlayer: AppDataSource.getRepository(SinglePlayerMachEntity),
  multiplayer: AppDataSource.getRepository(MultiplayerMatchEntity),
};

export { matchesRepository };
