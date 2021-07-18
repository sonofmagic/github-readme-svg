const svgCaptcha = require('svg-captcha')

function renderCaptcha({
  text = '',
  noise = 1,
  background, // 'rgb(3,102,214)'
  color = false,
  size,
  width = 150,
  height = 50,
  fontSize = 56
}) {
  const captcha = svgCaptcha(text, {
    noise,
    background,
    color,
    size,
    width,
    height,
    fontSize
  })

  return captcha
}

module.exports = {
  renderCaptcha
}
