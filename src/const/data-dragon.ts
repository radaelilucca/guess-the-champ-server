const DATA_DRAGON = {
  urls: {
    champion: (championId: string) =>
      `http://ddragon.leagueoflegends.com/cdn/12.14.1/data/en_US/champion/${championId}.json`,
    passive: "http://ddragon.leagueoflegends.com/cdn/12.14.1/img/passive",
    spell: "http://ddragon.leagueoflegends.com/cdn/12.14.1/img/spell",
  },
};

export { DATA_DRAGON };
