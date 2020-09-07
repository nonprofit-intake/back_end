const express = require('express')

const router = express.Router()

const authController = require('../auth/auth-controller')

const userController = require('./user-controller')
const { route } = require('../auth/auth-routes')

router
    .route('/')
    .get(userController.getAllUsers)

router
    .use(authController.protect)
    .route('/me')
    .get(userController.getCurrentUser)

router
    .use(authController.protect)
    .route('/:id')
    .get(userController.getUser)
    .patch(userController.updateUser)
    .delete(userController.deleteUser)




module.exports = router