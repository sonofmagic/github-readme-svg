import { Router } from 'express'
import svgRouter from './svg'
import qrcodeRouter from './qrcode'

const ONE_HOUR = 60 * 60
const ONE_DAY = ONE_HOUR * 24

const router = Router()

router.use((req, res, next) => {
  next()

  if (res.statusCode === 200 && res.body) {
    res.setHeader('Cache-Control', `public, max-age=${ONE_DAY}`)
    res.send(res.body)
  }
})
router.use('/svg', svgRouter)
router.use('/qrcode', qrcodeRouter)

// router.use((err, req, res, next) => {
//   console.log(err, req, res, next)
// })

export default router
