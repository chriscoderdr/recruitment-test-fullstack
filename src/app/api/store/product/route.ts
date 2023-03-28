import { apiAuthService } from "@app/api/service/auth";
import { NextApiRequest, NextApiResponse } from "next";
import { ApiError, ApiResponse, Credentials } from "@app/models/models";
import { NextRequest, NextResponse } from "next/server";
import { ErrorCodes } from "@app/api/utils/errorCodes";
import { authService } from "@app/service/auth";
import { dbService } from "@app/api/service/db";
import { FieldValidation, validators } from "@app/api/utils/validators";

export async function PUT(req: NextRequest) {
  let errors: ApiError[] = [];
  console.log(req.headers);
  try {
    const formData = await req.formData();
    const validationErrors: ApiError[] = validators.validateFields([
      {
        fieldName: "name",
        fieldValue: formData.get("name"),
        validators: [validators.isNotEmpty],
      },
      {
        fieldName: "price",
        fieldValue: formData.get("price"),
        validators: [validators.isANumber],
      },
      {
        fieldName: "image",
        fieldValue: formData.get("image"),
        validators: [validators.isAFile],
      },
    ]);
    errors.push(...validationErrors);
    console.log({validationErrors})
    if (errors.length == 0) {
    }
  } catch (e) {
    console.error(e);
  }
  const response = NextResponse.json({
    errors,
  } as ApiResponse);
  return response;
}
