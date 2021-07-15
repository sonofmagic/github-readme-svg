import express from 'express'
import router from './routers'
const app = express()

app.use('/v1', router)

app.use((req, res) => {
  res.redirect('https://www.icebreaker.top/')
})

app.use((err, req, res, next) => {
  console.error(err)
  res.status(500).send('Internal Serverless Error')
})

export default app
