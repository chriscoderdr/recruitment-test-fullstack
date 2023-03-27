import { dogService } from "@components/app/service/dogs";
import { NextApiRequest, NextApiResponse } from "next";

export async function GET(req: NextApiRequest) {
  const data = await dogService.getDogBreeds();
  const response = new Response(
    JSON.stringify({
      data: data,
    })
  , {
    status: 400,
    headers: {
      'content-type': 'application/json'
    }
  });
  return response;
}
