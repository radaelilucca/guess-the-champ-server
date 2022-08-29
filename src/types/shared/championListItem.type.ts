import { ChampionDataType } from "../game";

export type ChampionListItem = Omit<
  ChampionDataType,
  | "skins"
  | "lore"
  | "blurb"
  | "allytips"
  | "enemytips"
  | "tags"
  | "partype"
  | "info"
  | "stats"
  | "spells"
  | "passive"
>;
