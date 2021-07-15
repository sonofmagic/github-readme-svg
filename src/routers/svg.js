import { Router } from 'express'
const { createSVGWindow } = require('svgdom')
const { SVG, registerWindow } = require('@svgdotjs/svg.js')
const router = Router()

router.get('/', (req, res, next) => {
  const window = createSVGWindow()
  const document = window.document
  registerWindow(window, document)
  const canvas = SVG(document.documentElement)
  canvas.rect(100, 100).fill('yellow').move(50, 50)
  res.send(canvas.svg())
  next()
})

export default router
