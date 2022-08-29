export type GuessingModeNamesType = "ability" | "blurb" | "passive";

export type GuessingSubModeNamesType = "image" | "description";

export type GuessingModeType = {
  name: GuessingModeNamesType;
  subMode: GuessingSubModeNamesType;
};
