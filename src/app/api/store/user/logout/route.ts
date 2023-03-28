import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const response = NextResponse.json({});
  response.cookies.delete("access_token");
  return response;
}
