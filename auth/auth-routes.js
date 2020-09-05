const express = require('express')
const router = express.Router()
const authController = require('./auth-controller')
const mw = require('./auth-middleware')


router.post('/login', authController.login)

router.post('/register', mw.validateUserBody, authController.register)

module.exports = router