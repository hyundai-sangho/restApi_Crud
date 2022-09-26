const express = require('express')
const morgan = require('morgan')
const usersRoutes = require('./routes/users')
const cors = require('cors')

const app = express()
const PORT = 5000

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use('/users', usersRoutes)
app.set('views', 'views')
app.set('view engine', 'hbs')
app.use(express.static(__dirname + '/public'))

app.listen(PORT, () => {
  console.log(`서버 ${PORT}번 포트 작동 중`)
})
