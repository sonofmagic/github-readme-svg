const express = require('express')
const router = express.Router()

const createHttpError = require('http-errors')
const {
  renderIcon,
  renderQRCode,
  renderRoad,
  renderCaptcha,
  renderFortawesomeIcon,
  renderMiniprogram,
  renderMathjax,
} = require('./assets')

router.get('/qrcode', (req, res, next) => {
  const {
    value,
    p = 0,
    size = 256,
    w,
    h,
    color = '#000000',
    background = '#ffffff',
    ecl = 'Q',
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
    })
    res.body = qrcodeSvg
    next()
    return
  }
  next(new createHttpError[400]('value should not be a empty string'))
  // throw
  // next()
})

router.get('/road', (req, res, next) => {
  res.body = renderRoad()
  // res.send(result)
  next()
})

router.get('/icon', (req, res, next) => {
  const {
    value,
    size = '1em',
    w, //= '1em',
    h, // = '1em',
    fill = 'currentColor',
  } = req.query

  const innerFill = decodeURIComponent(fill)

  const attrs = {
    fill: innerFill,
    width: size,
    height: size,
  }
  if (w && typeof w === 'string') {
    attrs.width = w
  }
  if (w && typeof w === 'string') {
    attrs.height = h
  }
  const svgStr = renderIcon(value, attrs)
  // '<?xml version="1.0" standalone="yes"?>' +
  res.body = svgStr
  next()
})

router.get('/captcha', (req, res, next) => {
  const { value, n, bg, c, size, w, h, fz } = req.query

  if (typeof value === 'string' && value.length) {
    const params = {
      text: value,
      noise: 1,
      color: Boolean(c),
    }
    const noise = parseInt(n)
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
    res.body = svgStr
    next()
    return
  }
  next(new createHttpError[400]('value should not be a empty string'))
})

router.get('/fortawesome', (req, res, next) => {
  const { prefix, iconName, color } = req.query

  if (prefix && iconName) {
    const svgColor = decodeURIComponent(color)
    const vIcon = renderFortawesomeIcon(
      {
        prefix,
        iconName,
      },
      {
        styles: { color: svgColor },
      }
    )

    res.body = vIcon.html[0]
    next()
    return
  }
  next(new createHttpError[400]('prefix and iconName should not be empty'))
})

router.get('/icon/miniprogram', (req, res, next) => {
  res.body = renderMiniprogram()
  next()
})

router.get('/mathjax', async (req, res, next) => {
  const { tex } = req.query
  const decodeTex = decodeURIComponent(tex)
  res.body = await renderMathjax(decodeTex)
  next()
})

module.exports = router
