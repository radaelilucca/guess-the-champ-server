import { EncryptService, DecryptService } from ".";

const mockDataToEncrypt = {
  data: "Tests",
  totalCount: 20,
};

const customKey = "encryption-tests-key";

describe("Encryption Service tests with customKeys", () => {
  it("Should encrypt and decrypt data using AES algorithm and a customKey", () => {
    const encryptedData = EncryptService.execute({
      data: mockDataToEncrypt,
      customKey,
    });

    expect(typeof encryptedData).toEqual("string");

    const decrypted = DecryptService.execute({
      encryptedText: encryptedData,
      customKey,
    });

    expect(decrypted).toEqual(mockDataToEncrypt);
  });
});
