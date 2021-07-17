const express = require('express')
const router = express.Router()
const QRCode = require('qrcode-svg')
const createHttpError = require('http-errors')
const { createSVGWindow } = require('svgdom')
const { SVG, registerWindow } = require('@svgdotjs/svg.js')
const { renderIcon } = require('./assets/icon')
router.get('/qrcode', (req, res, next) => {
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
      ecl,
      join: true
    }).svg()
    res.body = qrcodeSvg
    next()
    return
  }
  next(new createHttpError[400]('value should not be a empty string'))
  // throw
  // next()
})

router.get('/road', (req, res, next) => {
  const window = createSVGWindow()
  const document = window.document
  registerWindow(window, document)
  const canvas = SVG(document.documentElement)

  canvas.viewbox(0, 0, 600, 100)
  const rect = canvas.rect(600, 100)
  rect.attr({
    fill: '#635B58'
  })

  canvas.line(0, 5, 600, 5).stroke({ width: 4, color: '#ffffff' })
  canvas.line(0, 95, 600, 95).stroke({ width: 4, color: '#ffffff' })
  const centerLine = canvas.line(0, 50, 600, 50)
  centerLine
    .stroke({
      width: 4,
      color: '#ffffff'
    })
    .attr({
      'stroke-dasharray': '50 50',
      'stroke-dashoffset': 0
    })

  canvas
    .element('animate')
    .attr({
      attributeName: 'stroke-dashoffset',
      values: '0;200',
      dur: '1s',
      repeatCount: 'indefinite'
    })
    .addTo(centerLine)
  const result = canvas.svg()
  res.body = result
  // res.send(result)
  next()
})

router.get('/icon', (req, res, next) => {
  const {
    value,
    size = '1em',
    w, //= '1em',
    h, // = '1em',
    fill = 'currentColor'
  } = req.query

  const innerFill = decodeURIComponent(fill)

  const attrs = {
    fill: innerFill,
    width: size,
    height: size
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

module.exports = router
