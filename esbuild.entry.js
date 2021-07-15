const esbuild = require('esbuild')
const config = require('./esbuild.config')
const fs = require('fs')
// const path = require('path')
const fsp = fs.promises

;(async () => {
  // await Promise.all([
  //   configs.map(async (x) => {
  //     return await esbuild.build(x)
  //   })
  // ])
  await esbuild.build(config)

  await Promise.all([
    fsp.copyFile('node_modules/unicode-properties/data.trie', 'dist/data.trie'),
    fsp.copyFile('node_modules/fontkit/indic.trie', 'dist/indic.trie'),
    fsp.copyFile('node_modules/fontkit/use.trie', 'dist/use.trie')
  ])
})()
