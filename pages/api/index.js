const express = require('express')
const { HttpError } = require('http-errors')
const app = express()
const router = express.Router()
const v1 = require('./routers')
router.use('/v1', v1)
app.use('/api', router)

app.use((err, req, res, next) => {
  if (err instanceof HttpError) {
    res.status(err.status).send(err.message)
  } else {
    console.error(err)
    res.status(500).send('Internal Serverless Error')
  }
})

app.use((req, res) => {
  if (!res.writableEnded) {
    res.redirect('https://www.icebreaker.top' + req.url)
  }
})

module.exports = app
