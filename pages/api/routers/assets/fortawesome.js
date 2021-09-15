const { library, icon } = require('@fortawesome/fontawesome-svg-core')

const freeSolidSvgIcons = require('@fortawesome/free-solid-svg-icons')
const freeRegularSvgIcons = require('@fortawesome/free-regular-svg-icons')
const freeBrandsSvgIcons = require('@fortawesome/free-brands-svg-icons')

function checkPrefix (key) {
  return /^fa/.test(key)
}
[freeSolidSvgIcons, freeRegularSvgIcons, freeBrandsSvgIcons].forEach(icons => {
  Object.entries(icons).forEach(([k, v]) => {
    if (checkPrefix(k)) {
      library.add(v)
    }
  })
})

module.exports = {
  renderFortawesomeIcon: icon
}
