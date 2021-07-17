// Bundling for node
const path = require('path')

const { isDev, isVercel, distPath } = require('./env')

/**
 * jsdoc 类似 ts 的写法
 * @typedef {import('esbuild').BuildOptions} BuildOptions
 * @type {BuildOptions}
 */
const config = {
  entryPoints: [isVercel ? './src/app.js' : './src/listener.js'],
  bundle: true,
  platform: 'node',
  // tencent node latest runtime
  target: ['node14'],
  outfile: path.resolve(__dirname, distPath, 'index.js'),
  sourcemap: isDev
}

module.exports = config
