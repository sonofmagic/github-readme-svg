import { NextApiRequest, NextApiResponse } from 'next'

const ONE_HOUR = 60 * 60
const ONE_DAY = ONE_HOUR * 24
export function svgCache(
  req: NextApiRequest,
  res: NextApiResponse,
  body: string
) {
  res.setHeader('Content-Type', 'image/svg+xml')
  res.setHeader('Cache-Control', `public, max-age=${ONE_DAY}`)
  res.send(body)
}
