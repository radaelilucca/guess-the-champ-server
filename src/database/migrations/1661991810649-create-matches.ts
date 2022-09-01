import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createMatches1661991810649 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "matches",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "uuid",
          },
          {
            name: "champion",
            type: "varchar",
            isUnique: true,
          },
          {
            name: "mode",
            type: "varchar",
          },
          {
            name: "subMode",
            type: "varchar",
          },
          {
            name: "score",
            type: "int",
            default: 3,
          },
          {
            name: "randomAbilityId",
            type: "varchar",
          },
          {
            name: "status",
            type: "varchar",
          },
          {
            name: "createdAt",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("matches");
  }
}
