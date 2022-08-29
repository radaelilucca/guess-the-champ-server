import { GuessingModeType } from "../../types/shared/guessingModes.type";

const guessingModes: GuessingModeType[] = [
  {
    name: "ability",
    subMode: "image",
  },
  {
    name: "ability",
    subMode: "description",
  },
  {
    name: "passive",
    subMode: "image",
  },
  {
    name: "passive",
    subMode: "description",
  },
  {
    name: "blurb",
    subMode: "description",
  },
];

export { guessingModes };
