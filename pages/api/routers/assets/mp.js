
const fs = require('fs')
const path = require('path')

const svg = fs.readFileSync(path.resolve(__dirname, './svgs/miniprogram.svg'), {
  encoding: 'utf-8'
})

module.exports = {
  renderMiniprogram () {
    return svg
  }
}
