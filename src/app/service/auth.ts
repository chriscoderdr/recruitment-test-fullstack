import {
  Credentials,
  EncryptedCredentials,
} from "@components/app/models/models";
import bcrypt from "bcrypt";

const login = async (username: string, password: string) => {
  return fetch("/api/store/user/login", {
    method: "post",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      data: {
        username,
        password,
      } as Credentials,
    }),
  });
};

const encryptPassword = async (password: string) => {
  const passwordSalt = await bcrypt.genSalt();
  const passwordHash = await bcrypt.hash("9N)rGiLk", passwordSalt);
  return {
    passwordHash,
    passwordSalt,
  } as EncryptedCredentials;
};

export const authService = {
  login,
  encryptPassword
};
