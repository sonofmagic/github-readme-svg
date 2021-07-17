const esbuild = require('esbuild')
const config = require('./esbuild.config')
const fs = require('fs')

const fsp = fs.promises
const { isDev, isProd, pathJoin, distPath } = require('./env')

;(async () => {
  // await Promise.all([
  //   configs.map(async (x) => {
  //     return await esbuild.build(x)
  //   })
  // ])
  if (isProd) {
    await fsp.rm(distPath, {
      recursive: true,
      force: true
    })
  }

  await esbuild.build(config)

  await Promise.all([
    fsp.copyFile(
      'node_modules/unicode-properties/data.trie',
      pathJoin('data.trie')
    ),
    fsp.copyFile('node_modules/fontkit/indic.trie', pathJoin('indic.trie')),
    fsp.copyFile('node_modules/fontkit/use.trie', pathJoin('use.trie'))
    // custom image deployment : don't need scf_bootstrap
    // fsp.copyFile('scf_bootstrap', pathJoin('scf_bootstrap'))
  ])

  if (isDev) {
    console.log(
      'http://localhost:9000/v1/qrcode?value=https://www.icebreaker.top/'
    )
  }
})()
