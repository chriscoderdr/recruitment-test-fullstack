import { apiAuthService } from "@app/api/service/auth";
import { NextApiRequest, NextApiResponse } from "next";
import { ApiError, ApiResponse, Credentials } from "@app/models/models";
import { NextRequest, NextResponse } from "next/server";
import { ErrorCodes } from "@app/api/utils/errorCodes";
import { authService } from "@app/service/auth";
import { dbService } from "@app/api/service/db";
import fs from "fs";
import { FieldValidation, validators } from "@app/api/utils/validators";
import { redirect } from "next/dist/server/api-utils";

export async function PUT(req: NextRequest) {
  let errors: ApiError[] = [];
  try {
    const authSession = await apiAuthService.authSession(req.cookies);
    const user = dbService.getDB().user.findUniqueOrThrow({
      where: { id: authSession.user?.id },
    });
    if (authSession.validCredentials) {
      const formData = await req.formData();
      const image = formData.get("image");
      const name = formData.get("name");
      const price = formData.get("price");
      const description = formData.get("description");
      const validationErrors: ApiError[] = validators.validateFields([
        {
          fieldName: "name",
          fieldValue: name,
          validators: [validators.isNotEmpty],
        },
        {
          fieldName: "price",
          fieldValue: price,
          validators: [validators.isANumber],
        },
        {
          fieldName: "image",
          fieldValue: image,
          validators: [validators.isAFile],
        },
        {
          fieldName: "description",
          fieldValue: description,
          validators: [validators.isNotEmpty],
        },
      ]);
      errors.push(...validationErrors);
      if (errors.length == 0 && image != null) {
        let newProduct = await dbService.getDB().product.create({
          data: {
            name: name as any,
            description: description as any,
            price: price as any,
            image: ``,
            authorId: (await user).id,
          },
        });
        const path = "https://localhost:3000/";
        const imagePath = `public/uploads/products/${newProduct.id}.png`;
        await dbService.getDB().product.update({
          where: { id: newProduct.id },
          data: {
            image: imagePath,
          },
        });
        newProduct.image = path + imagePath;
        const file = image as File;
        fs.writeFileSync(imagePath, Buffer.from(await file.arrayBuffer()));
        return NextResponse.json({
          data: newProduct,
        } as ApiResponse);
      }
    } else {
      const response = NextResponse.json({
        errors: [
          {
            message: "Invalid Session",
            statusCode: ErrorCodes.InvalidCredentials,
          },
        ],
      } as ApiResponse);
      response.cookies.delete("access_token");
      return response;
    }
  } catch (e) {
    console.error(e);
  }
  const response = NextResponse.json({
    errors,
  } as ApiResponse);
  return response;
}
