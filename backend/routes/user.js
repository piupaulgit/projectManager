const express = require('express');
const { getAllUsers, register, login,logout } = require('../controllers/user');
const router = express.Router()

router.get('/', getAllUsers)
router.post('/register', register)
router.post('/login', login)
router.post('/logout', logout)

module.exports = router;