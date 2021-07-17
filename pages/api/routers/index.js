const express = require('express')
const router = express.Router()
const svg = require('./svg')

const ONE_HOUR = 60 * 60
const ONE_DAY = ONE_HOUR * 24

router.use('/svg', svg)
router.use((req, res, next) => {
  next()

  if (res.statusCode === 200 && res.body) {
    res.setHeader('Cache-Control', `public, max-age=${ONE_DAY}`)
    res.send(res.body)
  }
})
module.exports = router
