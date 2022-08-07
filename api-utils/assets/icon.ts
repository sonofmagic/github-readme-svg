import svgIcons from '@ant-design/icons-svg'
import createHttpError from 'http-errors'
import { renderIconDefinitionToSVGElement } from '@ant-design/icons-svg/lib/helpers'
// const svgIcons = require('@ant-design/icons-svg')
// const createHttpError = require('http-errors')
// const {
//   renderIconDefinitionToSVGElement,
// } = require('@ant-design/icons-svg/lib/helpers')

export function renderIcon(icon, attrs = {}) {
  // eslint-disable-next-line no-prototype-builtins
  if (typeof svgIcons === 'object' && svgIcons.hasOwnProperty(icon)) {
    return renderIconDefinitionToSVGElement(svgIcons[icon], {
      extraSVGAttrs: Object.assign(
        {
          xmlns: 'http://www.w3.org/2000/svg',
          version: '1.1',
        },
        { width: '1em', height: '1em', fill: 'currentColor' },
        attrs
      ),
    })
  }
  throw new createHttpError[404]()
}

// module.exports = {
//   renderIcon
// }
