import { dataDragonChampions } from "../data";
import { GetChampionDataService } from "../services";
import { getRandomIntInRange } from "../utils";

class ChampionsController {
  champions = dataDragonChampions;

  getRandomChampionId() {
    const randomIndex = getRandomIntInRange({
      min: 0,
      max: this.champions.length - 1,
    });

    const championId = this.champions[randomIndex].id;

    return championId;
  }

  async list() {
    const parsedChampions = this.champions.map(
      ({ id, key, name, title, image }) => ({ id, key, name, title, image })
    );

    return parsedChampions;
  }

  async getRandomChampionData() {
    console.clear();
    console.log(this.list);
    const championId = this.getRandomChampionId();
    const championData = await GetChampionDataService.execute(championId);

    return championData;
  }
}

export default new ChampionsController();
