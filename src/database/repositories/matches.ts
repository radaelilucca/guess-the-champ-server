import { AppDataSource } from "..";
import { MatchEntity } from "../entities";

const matchesRepository = AppDataSource.getRepository(MatchEntity);

export { matchesRepository };
