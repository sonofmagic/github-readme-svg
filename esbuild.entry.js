const esbuild = require('esbuild')
const config = require('./esbuild.config')

;(async () => {
  // await Promise.all([
  //   configs.map(async (x) => {
  //     return await esbuild.build(x)
  //   })
  // ])
  return await esbuild.build(config)
})()
