import { Credentials } from "@app/models/models";

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

const logout = async () => {
  await fetch("/api/store/user/logout", {
    method: "post",
  });
  location.reload();
};

export const authService = {
  login,
  logout,
};
