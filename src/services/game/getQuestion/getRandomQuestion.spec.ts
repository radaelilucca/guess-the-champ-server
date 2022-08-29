import { GetRandomGameQuestionService } from ".";
import { GuessingModeNamesType } from "../../../types/shared/guessingModes.type";

describe("Random Game question service", () => {
  it("should get a random game question and replace the placeholeder with guessing mode", () => {
    const abilityGuessingModeName: GuessingModeNamesType = "ability";
    const blurbGuessingModeName: GuessingModeNamesType = "blurb";

    const questionsService = GetRandomGameQuestionService;

    const placeholder = "REPLACE";

    const randomAbilityQuestion = questionsService.execute(
      abilityGuessingModeName
    );

    expect(randomAbilityQuestion).not.toContain(placeholder);
    expect(randomAbilityQuestion).toContain(abilityGuessingModeName);

    const randomBlurbQuestion = questionsService.execute(blurbGuessingModeName);

    expect(randomBlurbQuestion).not.toContain(placeholder);
    expect(randomBlurbQuestion).toContain(blurbGuessingModeName);
  });
});
