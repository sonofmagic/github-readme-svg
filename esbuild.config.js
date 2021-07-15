// Bundling for node
const path = require('path')

/**
 * jsdoc 类似 ts 的写法
 * @typedef {import('esbuild').BuildOptions} BuildOptions
 * @type {BuildOptions}
 */
const config = {
  entryPoints: ['./src/listener.js'],
  bundle: true,
  platform: 'node',
  // tencent node latest runtime
  target: ['node12'],
  outfile: path.resolve(__dirname, 'dist', 'index.js'),
  sourcemap: true
}

module.exports = config
