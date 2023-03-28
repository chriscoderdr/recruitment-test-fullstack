import { apiAuthService } from "@components/app/api/service/auth";
import { NextApiRequest, NextApiResponse } from "next";

export async function POST(req: Request) {
  console.log((await req.json()).data.username);
  const response = new Response(
    JSON.stringify({
      data: {
        errors: [
          'dd'
        ]
      },
    })
  , {
    status: 400,
    headers: {
      'content-type': 'application/json'
    }
  });
  return response;
}
