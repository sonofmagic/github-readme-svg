const path = require('path')

const isProd = process.env.NODE_ENV === 'production'
const isDev = process.env.NODE_ENV === 'development'
const isVercel = process.env.TARGET === 'vercel'
const isSCF = process.env.TARGET === 'scf'

const distPath = isVercel ? 'api' : 'dist'

function pathJoin (...paths) {
  return path.join(distPath, ...paths)
}

module.exports = {
  isProd,
  isDev,
  isVercel,
  isSCF,
  distPath,
  pathJoin
}
