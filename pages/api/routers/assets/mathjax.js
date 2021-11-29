const mathjax = require('mathjax-full/es5/node-main')

async function renderMathjax(tex = '\\frac{1}{x^2-1}') {
  const MathJax = await mathjax.init({
    loader: { load: ['input/tex', 'output/svg'] },
  })
  const adaptor = MathJax.startup.adaptor
  const svg = await MathJax.tex2svgPromise(tex, { display: true })

  const innerSvg = adaptor.innerHTML(svg)
  return innerSvg
}

module.exports = {
  renderMathjax,
}
