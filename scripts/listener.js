const app = require('../pages/api/index')

app.listen(9000, () => {
  console.log(
    'http://localhost:9000/api/v1/svg/qrcode?value=https://www.icebreaker.top/'
  )
})
