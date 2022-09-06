import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class addMultiplayerMatches1662488680143 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "multiplayer-matches",
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
            name: "users",
            type: "varchar",
          },
          {
            name: "winnerId",
            type: "uuid",
          },
          {
            name: "createdAt",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );

    await queryRunner.createForeignKey(
      "multiplayer-matches",
      new TableForeignKey({
        name: "multi-match-winner-fk",
        columnNames: ["winnerId"],
        referencedTableName: "users",
        referencedColumnNames: ["id"],
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(
      "multiplayer-matches",
      "multi-match-winner-fk"
    );
    await queryRunner.dropTable("multiplayer-matches");
  }
}
