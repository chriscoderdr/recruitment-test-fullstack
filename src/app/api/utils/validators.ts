import { ApiError } from "@app/models/models";
import { File } from "buffer";
import { ErrorCodes } from "./errorCodes";

const isNotEmpty = (field: string, value: string) => {
  const pattern = /\S+/;
  if (!pattern.test(value)) {
    return {
      message: `${field} must not be empty`,
      statusCode: ErrorCodes.RequiredFieldIsEmpty,
    } as ApiError;
  }
  return false;
};

const isANumber = (field: string, value: string) => {
  const pattern = /^\d+\.?\d*$/;
  if (!pattern.test(value)) {
    return {
      message: `${field} must be a number`,
      statusCode: ErrorCodes.FieldMustBeANumber,
    } as ApiError;
  }
  return false;
};

const isAFile = (field: string, value: any) => {
  if (!(value instanceof File)) {
    return {
      message: `${field} must be a file`,
      statusCode: ErrorCodes.FieldMustBeANumber,
    } as ApiError;
  }
  return false;
};

export type FieldValidation = {
  fieldName: string;
  fieldValue: any;
  validators: Validator[];
};

export const validateFields = (
  validations: FieldValidation[]
): ApiError[] => {
  let errors: ApiError[] = [];
  validations.forEach((field) => {
    field.validators.forEach((validator) => {
      const error = validator(field.fieldName, field.fieldValue);
      if (error !== false) {
        errors.push(error as ApiError);
      }
    });
  });
  return errors;
};

type Validator = (field: string, value: any) => boolean | ApiError;

export const validators = { isNotEmpty, isAFile, isANumber, validateFields };
