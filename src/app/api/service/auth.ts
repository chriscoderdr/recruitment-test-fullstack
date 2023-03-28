import { EncryptedCredentials } from "@components/app/models/models";
import bcrypt from "bcrypt";
import { dbService } from "./db";

const encryptPassword = async (password: string) => {
  const passwordSalt = await bcrypt.genSalt();
  const passwordHash = await bcrypt.hash(password, passwordSalt);
  return {
    passwordHash,
    passwordSalt,
  } as EncryptedCredentials;
};

const authenticate = async (username: string, password: string) => {
  const user = await dbService.getDB().user.findUnique({ where: { username } });
  if (user) {
    return await bcrypt.compare(password, user.passwordHash);
  }
  return false;
};

export const apiAuthService = {
  encryptPassword,
  authenticate
};
