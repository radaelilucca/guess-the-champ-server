import { MigrationInterface, QueryRunner, TableUnique } from "typeorm";

export class dropMatchesChampionUnique1662075447219
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable("matches");

    const [championUnique] = table?.uniques || [];

    if (championUnique) {
      await queryRunner.dropUniqueConstraint("matches", championUnique);
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createUniqueConstraint(
      "matches",
      new TableUnique({
        columnNames: ["champion"],
        name: "champion-unique",
      })
    );
  }
}
