const express = require('express')
const userController = require('./user-controller')
const router = express.Router()
const auth = require('../auth/auth-controller')
const mw = require('./user-middleware')

router.get('/', userController.getAllUsers)

router.get('/me', auth.protect, userController.me)

router
    .route('/:id')
    .get(userController.getUser)
    .patch(userController.updateUser)
    .delete(userController.deleteUser)


module.exports = router