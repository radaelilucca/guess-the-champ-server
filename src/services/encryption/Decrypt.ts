import { AES, enc } from "crypto-js";
import { verbose } from "../../utils";

interface IDecryptServiceDTO {
  encryptedText: string;
  customKey?: string;
}
class Service {
  execute({ encryptedText, customKey }: IDecryptServiceDTO) {
    const key = customKey || process.env.CRYPTO_KEY;

    if (!key) {
      verbose.error({ id: "Decrypt Error", data: "missing key" });
      return;
    }

    const bytes = AES.decrypt(encryptedText, key);

    const decryptedData = JSON.parse(bytes.toString(enc.Utf8));

    return decryptedData;
  }
}

export const DecryptService = new Service();
