import { AES } from "crypto-js";
import { verbose } from "../../utils";

interface IEncryptServiceDTO {
  data: unknown;
  customKey?: string;
}

class Service {
  execute({ data, customKey }: IEncryptServiceDTO) {
    const key = customKey || process.env.CRYPTO_KEY;

    if (!key) {
      verbose.error({ id: "Encrypt Error", data: "missing key" });
      throw new Error("MISSING ENCRYPTION KEY");
    }

    const encrypted = AES.encrypt(JSON.stringify(data), key).toString();

    return encrypted;
  }
}

export const EncryptService = new Service();
