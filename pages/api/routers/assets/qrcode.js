const QRCode = require('qrcode-svg')

function renderQRCode (params) {
  const { value, p, w, h, size, color, background, ecl } = params
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
  return qrcodeSvg
}

module.exports = {
  renderQRCode
}
