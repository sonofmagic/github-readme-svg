import { NextApiRequest, NextApiResponse } from 'next'
import { svgCache } from '@/api-utils/svg-cache'
import { renderRoad } from '@/api-utils/assets/road'
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  svgCache(req, res, renderRoad())
}
