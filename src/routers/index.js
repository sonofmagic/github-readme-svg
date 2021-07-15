import { Router } from 'express'
import svgRouter from './svg'
import qrcodeRouter from './qrcode'
const router = Router()

router.use('/svg', svgRouter)
router.use('/qrcode', qrcodeRouter)

export default router
