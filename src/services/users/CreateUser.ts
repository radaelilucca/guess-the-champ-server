import { UserEntity } from "../../database/entities";
import { usersRepository } from "../../database/repositories";
import { verbose } from "../../utils";
import { EncryptService } from "../encryption";

interface INewUserDTO {
  username: string;
  password: string;
}

class Service {
  async execute({ username, password }: INewUserDTO) {
    const encryptedPassword = EncryptService.execute({
      data: password,
      customKey: password,
    });

    const baseUser = new UserEntity();

    const newUser = { ...baseUser, username, password: encryptedPassword };

    try {
      const user = await usersRepository.save(newUser);
      return user;
    } catch (error: any) {
      verbose.error({ id: "Create user service", data: error });
      throw error.detail;
    }
  }
}

export const CreateUserService = new Service();
