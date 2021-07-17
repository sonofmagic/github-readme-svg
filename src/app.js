import express from 'express'
import router from './routers'
import { HttpError } from 'http-errors'

const app = express()

app.use('/v1', router)

app.use((err, req, res, next) => {
  console.error(err)
  if (err instanceof HttpError) {
    res.status(err.status).send(err.message)
  } else {
    res.status(500).send('Internal Serverless Error')
  }
})

app.use((req, res) => {
  if (!res.writableEnded) {
    res.redirect('https://www.icebreaker.top' + req.url)
  }
})

export default app

module.exports = app
