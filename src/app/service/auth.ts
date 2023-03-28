import {
  Credentials,
  EncryptedCredentials,
} from "@app/models/models";

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

export const authService = {
  login,
};
