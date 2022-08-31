import jwt from "jsonwebtoken";
import { UserEntity } from "../../database/entities";

import { usersRepository } from "../../database/repositories";
import { DecryptService } from "../encryption";

interface ICreateSessionDTO {
  username?: string;
  password?: string;
  user?: UserEntity;
}

class Service {
  async execute({ username, password, user }: ICreateSessionDTO) {
    const userData = user || (await usersRepository.findOneBy({ username }));

    if (!userData) throw new Error("User not found");

    if (!user) {
      if (!username || !password) throw new Error("Missing required fields");

      const decryptedPassword = DecryptService.execute({
        encryptedText: userData.password,
        customKey: password,
      });

      const validLogin = decryptedPassword === password;

      if (!validLogin) throw "Invalid password";
    }

    const tokenKey = process.env.JWT_PRIVATE_KEY ?? "";

    const payload = {
      username: userData.username,
      id: userData.id,
    };

    const token = jwt.sign({ userId: payload.id, username }, tokenKey, {
      algorithm: "HS256",
      expiresIn: Math.floor(Date.now() / 1000) + 60 * 60,
    });

    return {
      token,
      user: {
        id: userData.id,
        username: userData.username,
      },
    };
  }
}

export const CreateSessionService = new Service();
