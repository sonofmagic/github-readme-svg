import { NextApiRequest, NextApiResponse } from 'next'
import { svgCache } from '@/api-utils/svg-cache'
import { renderQRCode } from '@/api-utils/assets/qrcode'
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    value,
    p = 0,
    size = 256,
    w,
    h,
    color = '#000000',
    background = '#ffffff',
    ecl = 'Q',
    type,
    ...args
  } = req.query
  if (typeof value === 'string' && value.length) {
    const qrcodeSvg = renderQRCode({
      value,
      p,
      size,
      w,
      h,
      color,
      background,
      ecl,
      type,
      ...args,
    })

    svgCache(req, res, qrcodeSvg)
    return
  }
}
