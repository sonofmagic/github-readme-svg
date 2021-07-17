const svgIcons = require('@ant-design/icons-svg')
const createHttpError = require('http-errors')
const {
  renderIconDefinitionToSVGElement
} = require('@ant-design/icons-svg/lib/helpers')

function renderIcon(icon) {
  if (svgIcons.hasOwnProperty(icon, (attrs = {}))) {
    return renderIconDefinitionToSVGElement(svgIcons[icon], {
      extraSVGAttrs: Object.assign(
        {},
        { width: '1em', height: '1em', fill: 'currentColor' },
        attrs
      )
    })
  }
  throw new createHttpError[404]()
}

module.exports = {
  renderIcon
}