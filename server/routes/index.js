const express = require('express')
const register = require('../controller/register')
const router = express.Router()

// Create user API
router.post('/register', register)

module.exports = router