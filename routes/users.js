const express = require('express')
const router = express.Router()

const { findUsers, createUser, findUserById, deleteUser, updateUser } = require('../controllers/users')

router.get('/', findUsers)
router.post('/', createUser)
router.get('/:id', findUserById)
router.delete('/:id', deleteUser)
router.patch('/:id', updateUser)

module.exports = router
