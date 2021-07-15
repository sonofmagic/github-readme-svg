import { Router } from 'express'
import QRCode from 'qrcode-svg'
import createHttpError from 'http-errors'

const router = Router()

router.get('/', (req, res, next) => {
  const {
    value,
    p = 0,
    size = 256,
    w,
    h,
    color = '#000000',
    background = '#ffffff',
    ecl = 'Q'
  } = req.query
  if (typeof value === 'string' && value.length) {
    const qrcodeSvg = new QRCode({
      content: value,
      padding: p,
      width: w || size,
      height: h || size,
      color,
      background,
      ecl
    }).svg()
    res.body = qrcodeSvg
    next()
    return
  }
  throw new createHttpError[400]('value should not be a empty string')
  // next()
})

export default router
