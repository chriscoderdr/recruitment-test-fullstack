import { apiAuthService } from "@app/api/service/auth";
import { NextApiRequest, NextApiResponse } from "next";
import {
  ApiError,
  ApiResponse,
  Credentials,
} from "@app/models/models";
import { NextResponse } from "next/server";
import { serialize } from "cookie";
import { ErrorCodes } from "@app/api/utils/errorCodes";

export async function POST(req: Request) {
  let errors: ApiError[] = [];
  try {
    const request = await req.json();
    if (request.data && request.data.username && request.data.password) {
      const credentials = request.data as Credentials;
      const authResult = await apiAuthService.authenticate(
        credentials.username.toLowerCase(),
        credentials.password
      );
      if (authResult.validCredentials && authResult.user) {
        const jwt = await apiAuthService.generateToken(authResult.user);
        const res = NextResponse.json({
          data: {
            user: authResult.user,
          },
        } as ApiResponse);
        res.cookies.set({
          name: "access_token",
          value: jwt,
          httpOnly: true, // as we don't have https for dev as of now
        });
        return res;
      }
      errors.push({
        message: "User or password is wrong",
        statusCode: ErrorCodes.InvalidCredentials,
      });

      if (!request.data.username) {
        errors.push({
          message: "Username is required",
          statusCode: ErrorCodes.RequiredFieldIsEmpty,
        });
      }
      if (!request.data.password) {
        errors.push({
          message: "Password is required",
          statusCode: ErrorCodes.RequiredFieldIsEmpty,
        });
      }
    }
  } catch (e) {
    errors.push({
      message: 'Invalid request',
      statusCode: ErrorCodes.InvalidRequest 
    });
  }
  const response = new Response(
    JSON.stringify({
      errors: errors,
      data: {},
    } as ApiResponse),
    {
      status: 401,
      headers: {
        "content-type": "application/json",
      },
    }
  );
  return response;
}
