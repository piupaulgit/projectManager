const express = require('express');
const { route } = require('express/lib/application');
const { getAllUsers, register, login, logout, isLoggedIn } = require('../controllers/user');
const router = express.Router()

router.get('/', getAllUsers)
router.post('/register', register)
router.post('/login', login)
router.post('/logout', logout)
router.get("/test", isLoggedIn, (req,res) => {
    res.json({"msg" :"getting msg"})
})

module.exports = router;