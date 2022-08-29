import { AppDataSource } from "..";
import { UserEntity } from "../entities";

const usersRepository = AppDataSource.getRepository(UserEntity);

export { usersRepository };
