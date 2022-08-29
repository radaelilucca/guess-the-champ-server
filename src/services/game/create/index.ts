import { DATA_DRAGON, guessingModes } from "../../../const";
import { ChampionsController } from "../../../controllers";
import { MatchDataType } from "../../../types/shared";
import { getRandomIntInRange } from "../../../utils";
import { GetRandomGameQuestionService } from "../getQuestion";

class Service {
  async createNewGame() {
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

    const newGame = {
      champion,
      guessingMode,
      question,
      randomAbility,
      passive: parsedPassive,
      gameplayTips,
    } as MatchDataType;

    // TODO: ENCRYPT GAME BEFORE SEND TO FRONTEND

    return newGame;
  }
}

export const CreateGameService = new Service();
