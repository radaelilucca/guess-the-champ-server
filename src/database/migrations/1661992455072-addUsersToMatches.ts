import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from "typeorm";

export class addUsersToMatches1661992455072 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "matches",
      new TableColumn({
        name: "userId",
        type: "uuid",
        isNullable: true,
      })
    );

    await queryRunner.createForeignKey(
      "matches",
      new TableForeignKey({
        name: "match-user-fk",
        columnNames: ["userId"],
        referencedTableName: "users",
        referencedColumnNames: ["id"],
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("matches", "match-user-fk");
    await queryRunner.dropColumn("matches", "userId");
  }
}
