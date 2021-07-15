const esbuild = require('esbuild')
const config = require('./esbuild.config')
const fs = require('fs')
// const path = require('path')
const fsp = fs.promises
const { isDev } = require('./env')
;(async () => {
  // await Promise.all([
  //   configs.map(async (x) => {
  //     return await esbuild.build(x)
  //   })
  // ])

  await fsp.rm('dist', {
    recursive: true,
    force: true
  })

  await esbuild.build(config)

  await Promise.all([
    fsp.copyFile('node_modules/unicode-properties/data.trie', 'dist/data.trie'),
    fsp.copyFile('node_modules/fontkit/indic.trie', 'dist/indic.trie'),
    fsp.copyFile('node_modules/fontkit/use.trie', 'dist/use.trie'),
    fsp.copyFile('scf_bootstrap', 'dist/scf_bootstrap')
  ])

  if (isDev) {
    console.log(
      'http://localhost:9000/v1/qrcode?value=https://www.icebreaker.top/'
    )
  }
})()
