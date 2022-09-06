import { DATA_DRAGON, guessingModes } from "./../../const";
import { ChampionsController } from "./../../controllers";
import { SinglePlayerMachEntity } from "./../../database/entities";
import { matchesRepository } from "./../../database/repositories";
import { MatchDataType } from "./../../types/shared";
import { getRandomIntInRange } from "./../../utils";
import { EncryptService } from "./../encryption";
import { FinishMatchService } from "./finish";
import { GetRandomGameQuestionService } from "./getQuestion";

class Service {
  async createNewGame({ userId }: { userId: string }) {
    const randomChampionData =
      await ChampionsController.getRandomChampionData();

    const {
      key,
      id,
      name,
      title,
      lore,
      blurb,
      allytips,
      enemytips,
      tags,
      spells,
      passive,
    } = randomChampionData;

    const parsedSpells = spells.map(({ id, name, image, description }) => ({
      id,
      name,
      description,
      imageSRC: `${DATA_DRAGON.urls.spell}/${image.full}`,
    }));

    const parsedPassive = {
      name: passive.name,
      description: passive.description,
      imageSRC: `${DATA_DRAGON.urls.passive}/${passive.image.full}`,
    };

    const gameplayTips = [...allytips, ...enemytips];

    const champion = {
      id,
      key,
      name,
      title,
      tags,
      descriptions: {
        lore,
        blurb,
      },
    };

    const guessingMode =
      guessingModes[
        getRandomIntInRange({ min: 0, max: guessingModes.length - 1 })
      ];

    const randomAbilityIndex = getRandomIntInRange({
      min: 0,
      max: spells.length - 1,
    });

    const randomAbility = parsedSpells[randomAbilityIndex];

    const question = GetRandomGameQuestionService.execute(guessingMode.name);

    const gameData = {
      champion,
      guessingMode,
      question,
      randomAbility,
      passive: parsedPassive,
      gameplayTips,
    } as MatchDataType;

    const match: Partial<SinglePlayerMachEntity> = {
      champion: champion.name.toLowerCase(),
      mode: guessingMode.name,
      subMode: guessingMode.subMode,
      score: 3,
      randomAbilityId: randomAbility.id,
      status: "in-progress",
      userId,
    };

    const inProgressMatch = await matchesRepository.singlePlayer.findOne({
      where: { status: "in-progress" },
    });

    if (inProgressMatch) {
      await FinishMatchService.execute({ id: inProgressMatch.id });
    }

    const persistedMatch = await matchesRepository.singlePlayer.save(match);

    const encryptedGame = EncryptService.execute({ data: gameData });

    return { matchData: encryptedGame, matchId: persistedMatch.id };
  }
}

export const CreateGameService = new Service();
