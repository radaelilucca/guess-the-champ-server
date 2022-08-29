import { GuessingModeType } from "./guessingModes.type";

export type MatchDataType = {
  champion: {
    id: string;
    key: string;
    name: string;
    title: string;
    tags: string[];
    descriptions: {
      lore: string;
      blurb: string;
    };
  };
  guessingMode: GuessingModeType;
  question: string;
  randomAbility: {
    id: string;
    name: string;
    description: string;
    imageSRC: string;
  };
  passive: {
    name: string;
    description: string;
    imageSRC: string;
  };
  gameplayTips: string[];
};
