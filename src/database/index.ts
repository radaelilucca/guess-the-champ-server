import { DataSource } from "typeorm";
import { MatchEntity, UserEntity } from "./entities";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USER ?? "",
  password: process.env.DATABASE_PASSWORD ?? "",
  database: process.env.DATABASE_DATABASE ?? "",
  synchronize: false,
  logging: true,
  entities: [UserEntity, MatchEntity],
  //TODO: check this path
  migrations: ["src/database/migrations/**/*.ts"],
});
