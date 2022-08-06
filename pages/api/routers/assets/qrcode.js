const QRCode = require('qrcode-svg')
const IceQRCode = require('@icebreakers/qrcode')

function renderQRCode(params) {
  const { value, p, w, h, size, color, background, ecl, type, ...args } = params
  if (type) {
    const fn = IceQRCode[type]
    if (typeof fn === 'function') {
      const svg = fn({
        content: value,
        size: size || w || h,
        level: ecl,
        type: args.qrcodeType,
        ...args,
      })
      return svg
    }
  } else {
    const qrcodeSvg = new QRCode({
      content: value,
      padding: p,
      width: w || size,
      height: h || size,
      color,
      background,
      ecl,
      join: true,
    }).svg()
    return qrcodeSvg
  }
}

module.exports = {
  renderQRCode,
}
