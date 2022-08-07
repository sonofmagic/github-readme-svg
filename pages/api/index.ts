import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  response.status(200).json({
    NODE_ENV: process.env.NODE_ENV,
    version: process.version,
    body: request.body,
    query: request.query,
    cookies: request.cookies,
  })
}
