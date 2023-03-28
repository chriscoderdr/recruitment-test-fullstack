import { User } from "@prisma/client";

export type DogBreed = {
  name: string;
  sub_breeds: string[];
  image: string;
};

export type Credentials = {
  username: string;
  password: string;
};

export type FormFieldError = {
  message: string;
};

export type EncryptedCredentials = {
  passwordSalt: string;
  passwordHash: string;
};

export type AuthResult = {
  validCredentials: boolean;
  user?: User;
};

export type ApiError = {
  message: string;
  statusCode: number;
};

export type ApiResponse = {
  data?: any;
  errors?: ApiError[];
};

export type CreateProductEntity = {
  name: string;
  price: number;
  description: string;
  image: File;
};
