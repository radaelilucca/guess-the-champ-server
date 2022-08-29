import { gameQuestions } from "../../../const";
import { GuessingModeNamesType } from "../../../types/shared/guessingModes.type";
import { getRandomIntInRange } from "../../../utils";

class Service {
  availableQuestions = gameQuestions;
  replaceRegex = /REPLACE/;

  execute(guessingMode: GuessingModeNamesType) {
    const randomIndex = getRandomIntInRange({
      min: 0,
      max: this.availableQuestions.length,
    });

    const question = this.availableQuestions[randomIndex];
    const parsedText = question.replace(this.replaceRegex, guessingMode);

    return parsedText;
  }
}

export const GetRandomGameQuestionService = new Service();
