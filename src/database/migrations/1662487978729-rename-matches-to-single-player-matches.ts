import { MigrationInterface, QueryRunner } from "typeorm";

export class renameMatchesToSinglePlayerMatches1662487978729
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.renameTable("matches", "single-player-matches");
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.renameTable("single-player-matches", "matches");
  }
}
