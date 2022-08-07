import { NextApiRequest, NextApiResponse } from 'next'
import { svgCache } from '@/api-utils/svg-cache'
import { renderCaptcha, CaptchaParams } from '@/api-utils/assets/captcha'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { value, n, bg, c, size, w, h, fz } = req.query as Record<
    string,
    string
  >

  if (typeof value === 'string' && value.length) {
    const params: Partial<CaptchaParams> = {
      text: value,
      noise: 1,
      color: Boolean(c),
    }
    const noise = parseInt(n as string, 10)
    if (!isNaN(noise)) {
      params.noise = noise
    }
    if (bg) {
      params.background = decodeURIComponent(bg)
    }
    if (size) {
      params.size = parseInt(size) || 4
    }
    if (w) {
      params.width = parseInt(w)
    }
    if (h) {
      params.height = parseInt(h)
    }
    if (fz) {
      params.fontSize = parseInt(fz)
    }
    const svgStr = renderCaptcha(params)

    svgCache(req, res, svgStr)
    return
  }
}
