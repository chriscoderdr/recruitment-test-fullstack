import { AuthResult, EncryptedCredentials } from "@app/models/models";
import { User } from "@prisma/client";
import bcrypt from "bcrypt";
import { dbService } from "./db";
import jwt from "jsonwebtoken";
import { RequestCookies } from "next/dist/compiled/@edge-runtime/cookies";
import { ReadonlyRequestCookies } from "next/dist/server/app-render";

const authSession = async (
  cookies: RequestCookies | ReadonlyRequestCookies
): Promise<AuthResult> => {
  if (cookies.has("access_token")) {
    try {
      const access_token: string = cookies.get("access_token")!.value;
      const decoded = jwt.verify(
        access_token,
        "NOT_READY_FOR_PRODUCTION"
      ) as User;
      const user = await dbService.getDB().user.findUniqueOrThrow({
        where: { id: decoded.id },
      });
      return {
        validCredentials: true,
        user,
      };
    } catch (e) {}
  }
  return {
    validCredentials: false,
  };
};

const encryptPassword = async (password: string) => {
  const passwordSalt = await bcrypt.genSalt();
  const passwordHash = await bcrypt.hash(password, passwordSalt);
  return {
    passwordHash,
    passwordSalt,
  } as EncryptedCredentials;
};

const authenticate = async (
  username: string,
  password: string
): Promise<AuthResult> => {
  const user = await dbService.getDB().user.findUnique({ where: { username } });
  if (
    user &&
    user.passwordHash &&
    (await bcrypt.compare(password, user.passwordHash))
  ) {
    return {
      validCredentials: true,
      user: {
        ...user,
        passwordHash: undefined,
        passwordSalt: undefined,
      },
    };
  }
  return {
    validCredentials: false,
  };
};

const generateToken = async (user: User) => {
  return jwt.sign(
    {
      ...user,
      passwordHash: undefined,
      passwordSalt: undefined,
    },
    "NOT_READY_FOR_PRODUCTION"
  );
};

export const apiAuthService = {
  encryptPassword,
  authenticate,
  generateToken,
  authSession
};
