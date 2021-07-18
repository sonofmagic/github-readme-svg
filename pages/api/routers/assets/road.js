const { createSVGWindow } = require('svgdom')
const { SVG, registerWindow } = require('@svgdotjs/svg.js')
const { getCar } = require('./car')
function renderRoad() {
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

  const carGroup = canvas.group()
  carGroup.svg(getCar())
  // carGroup.transform({
  //   translateX: 50,
  //   translateY: 50
  // })

  return canvas.svg()
}

module.exports = {
  renderRoad
}
