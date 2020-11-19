const express = require('express')
const userController = require('./user-controller')
const router = express.Router()
const auth = require('../auth/auth-controller')
const mw = require('./user-middleware')

router.route('*').all(auth.protect, auth.restrictTo('admin'))

router.route('/:id').all(mw.validateUserId)

router.get('/', userController.getAllUsers)

router
    .route('/:id')
    .get(userController.getUser)
    .patch(userController.updateUser)
    .delete(userController.deleteUser)

router
    .use(auth.protect)
    .route('/me')
    .get(userController.me)
    .patch(userController.updateMe)

module.exports = router