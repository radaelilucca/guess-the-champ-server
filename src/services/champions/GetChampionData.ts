import axios from "axios";
import { DATA_DRAGON } from "../../const";
import { ChampionDataType } from "../../types";

class Service {
  async execute(champId: string) {
    const URL = DATA_DRAGON.urls.champion(champId);

    const { data } = await axios.get(URL);

    const championData: ChampionDataType = data.data[champId];

    return championData;
  }
}

export const GetChampionDataService = new Service();
