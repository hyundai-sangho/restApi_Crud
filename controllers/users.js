const connection = require('../config/database')
const { v4: uuidv4 } = require('uuid')

const findUsers = (_req, res) => {
  connection.query('SELECT * FROM users', (error, rows) => {
    if (error) throw error
    console.log('User info is: ', rows)
    res.render('index', { rows })
  })
}

const findUserById = (req, res) => {
  const { id } = req.params
  connection.query(`SELECT * FROM users WHERE id='${id}' LIMIT 1`, (error, rows) => {
    if (error) throw error
    console.log('User info is: ', rows)
    res.render('index', { rows })

    console.log('rows의 값은: ', rows)
  })
}

const createUser = (req, res) => {
  const firstName = req.body.firstName
  const lastName = req.body.lastName
  const age = req.body.age
  const id = uuidv4()

  connection.query(`INSERT INTO users VALUES ("${id}", "${firstName}", "${lastName}", "${age}");`, (error, rows) => {
    if (error) throw error
    console.log('User info is: ', rows)
    res.send(rows)
  })
}

const deleteUser = (req, res) => {
  const { id } = req.params

  connection.query(`DELETE FROM users WHERE id = '${id}'`, (error, rows) => {
    if (error) throw error
    console.log('User info is: ', rows)
    res.send(rows)
  })
}

const updateUser = (req, res) => {
  const { id } = req.params
  const firstName = req.body.firstName
  const lastName = req.body.lastName

  connection.query(`UPDATE users SET firstName='${firstName}', lastName='${lastName}' WHERE id='${id}'`, (error, rows) => {
    if (error) throw error
    console.log('User info is: ', rows)
    res.send(rows)
  })
}

module.exports = { findUsers, createUser, findUserById, deleteUser, updateUser }
