import svgCaptcha from 'svg-captcha'

export class CaptchaParams {
  text: string
  noise: number
  color: boolean
  background: string
  size: number
  width: number
  height: number
  fontSize: number
}

export function renderCaptcha({
  text = '',
  noise = 1,
  background, // 'rgb(3,102,214)'
  color = false,
  size,
  width = 150,
  height = 50,
  fontSize = 56,
}: Partial<CaptchaParams>) {
  // @ts-ignore
  const captcha = svgCaptcha(text, {
    noise,
    background,
    color,
    size,
    width,
    height,
    fontSize,
  })

  return captcha
}
