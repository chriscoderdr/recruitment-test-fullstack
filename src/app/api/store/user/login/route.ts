import { NextApiRequest, NextApiResponse } from "next";

export async function POST(req: NextApiRequest) {
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
