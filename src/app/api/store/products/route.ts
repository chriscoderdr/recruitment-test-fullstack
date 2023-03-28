import { apiAuthService } from "@app/api/service/auth";
import { NextApiRequest, NextApiResponse } from "next";
import { ApiError, ApiResponse, Credentials } from "@app/models/models";
import { NextRequest, NextResponse } from "next/server";
import { ErrorCodes } from "@app/api/utils/errorCodes";
import { authService } from "@app/service/auth";
import { dbService } from "@app/api/service/db";

export async function GET(req: NextRequest) {
  let errors: ApiError[] = [];
  if (req.cookies.has("access_token")) {
    try {
      const authSession = await apiAuthService.authSession(req.cookies);
      if (authSession.validCredentials && authSession.user) {
        const resp = await dbService.getDB().product.findMany({
          take: 100,
        });
        return NextResponse.json({
          data: resp,
        } as ApiResponse);
      }
    } catch (e) {
      console.error(e);
      errors.push({
        message: "Invalid request",
        statusCode: ErrorCodes.InvalidRequest,
      });
    }
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
