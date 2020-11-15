const express = require('express')
const userController = require('./user-controller')
const router = express.Router()
const auth = require('../auth/auth-controller')
const mw = require('./user-middleware')

router.get('/', userController.getAllUsers)

router
    .use(auth.protect)
    .route('/me')
    .get(userController.me)
    .patch(userController.updateMe)

router
    .route('/:id')
    .get(userController.getUser)
    .patch(userController.updateUser)
    .delete(userController.deleteUser)


module.exports = router