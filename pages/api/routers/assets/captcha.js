const svgCaptcha = require('svg-captcha')

function renderCaptcha ({
  text = '',
  noise = 1,
  background, // 'rgb(3,102,214)'
  color = false
}) {
  const captcha = svgCaptcha(text, {
    noise,
    background,
    color
  })
  return captcha
}

module.exports = {
  renderCaptcha
}
