const express = require('express');
const { getAllUsers, register, login } = require('../controllers/user');
const router = express.Router()

router.get('/', getAllUsers)
router.post('/register', register)
router.post('/login', login)

module.exports = router;