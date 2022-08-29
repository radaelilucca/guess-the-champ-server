import { dataDragonChampions } from "../../data";
import { getRandomIntInRange } from "../../utils";

class Service {
  champions = dataDragonChampions;

  execute() {
    const randomIndex = getRandomIntInRange({
      min: 0,
      max: this.champions.length - 1,
    });

    const championId = this.champions[randomIndex].id;

    return championId;
  }
}

export const GetRandomChampionService = new Service();
