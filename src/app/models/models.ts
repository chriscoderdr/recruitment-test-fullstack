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
