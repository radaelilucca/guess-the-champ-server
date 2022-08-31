import jwt from "jsonwebtoken";

import { usersRepository } from "../../database/repositories";
import { DecryptService, EncryptService } from "../encryption";

interface ICreateSessionDTO {
  username: string;
  password: string;
}

class Service {
  async execute({ username, password }: ICreateSessionDTO) {
    const user = await usersRepository.findOneBy({ username });

    if (!user) throw new Error("User not found");

    const decryptedPassword = DecryptService.execute({
      encryptedText: user.password,
      customKey: password,
    });

    const validLogin = decryptedPassword === password;

    if (!validLogin) throw "Invalid password";

    const tokenKey = process.env.JWT_PRIVATE_KEY ?? "";

    const userData = {
      username: user.username,
      id: user.id,
    };

    const token = jwt.sign({ userId: user.id }, tokenKey, {
      algorithm: "HS256",
      expiresIn: Math.floor(Date.now() / 1000) + 60 * 60,
    });

    return { token, user: userData };
  }
}

export const CreateSessionService = new Service();
