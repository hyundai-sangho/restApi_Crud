const express = require('express')
const { v4: uuidv4 } = require('uuid')
const connection = require('../config/database')

const router = express.Router()

let users = []

router.get('/', (_req, res) => {
  connection.query('SELECT * FROM users', (error, rows) => {
    if (error) throw error
    console.log('User info is: ', rows)
    res.render('index', { rows })
  })
})

router.post('/', (req, res) => {
  // const user = req.body
  // console.log(user)
  // users.push({ ...user, id: uuidv4() })

  const firstName = req.body.firstName
  const lastName = req.body.lastName
  const age = req.body.age
  const id = uuidv4()

  connection.query(`INSERT INTO users VALUES ("${id}", "${firstName}", "${lastName}", "${age}");`, (error, rows) => {
    if (error) throw error
    console.log('User info is: ', rows)
    res.send(rows)
  })

  // res.send(`데이터베이스에 추가됨.`)
  // res.send(`${user.firstName}: 데이터베이스에 추가됨.`)
})

// users/2 => req.params {id: 2}
router.get('/:id', (req, res) => {
  const { id } = req.params

  const foundUser = users.find((user) => user.id === id)
  res.send(foundUser)
})

router.delete('/:id', (req, res) => {
  const { id } = req.params

  connection.query(`DELETE FROM users WHERE id = '${id}'`, (error, rows) => {
    if (error) throw error
    console.log('User info is: ', rows)
    res.send(rows)
  })

  // users = users.filter((user) => user.id !== id)
  // res.send(`${id}: id 사용자는 데이터베이스에서 삭제되었습니다.`)
})

router.patch('/:id', (req, res) => {
  console.log(req.body)
  const { id } = req.params
  const firstName = req.body.firstName
  const lastName = req.body.lastName
  console.log(id)
  console.log(firstName)
  console.log(lastName)
  connection.query(`UPDATE users SET firstName='${firstName}', lastName='${lastName}' WHERE id='${id}'`, (error, rows) => {
    if (error) throw error
    console.log('User info is: ', rows)
    res.send(rows)
  })
})

module.exports = router
