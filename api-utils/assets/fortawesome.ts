import { library, icon } from '@fortawesome/fontawesome-svg-core'

// const { library, icon } = require('@fortawesome/fontawesome-svg-core')
import freeSolidSvgIcons from '@fortawesome/free-solid-svg-icons'
import freeRegularSvgIcons from '@fortawesome/free-regular-svg-icons'
import freeBrandsSvgIcons from '@fortawesome/free-brands-svg-icons'
// const freeSolidSvgIcons = require('@fortawesome/free-solid-svg-icons')
// const freeRegularSvgIcons = require('@fortawesome/free-regular-svg-icons')
// const freeBrandsSvgIcons = require('@fortawesome/free-brands-svg-icons')

function checkPrefix(key) {
  return /^fa/.test(key)
}
;[freeSolidSvgIcons, freeRegularSvgIcons, freeBrandsSvgIcons].forEach(
  (icons) => {
    Object.entries(icons).forEach(([k, v]) => {
      if (checkPrefix(k)) {
        // @ts-ignore
        library.add(v)
      }
    })
  }
)
export const renderFortawesomeIcon = icon

// module.exports = {
//   renderFortawesomeIcon: icon,
// }
