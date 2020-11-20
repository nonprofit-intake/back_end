const express = require('express')
const userController = require('./user-controller')
const router = express.Router()
const auth = require('../auth/auth-controller')
const mw = require('./user-middleware')

router.route('/:id').all(auth.protect, mw.validateUserId ,auth.restrictTo('admin', 'staff'))

router.get('/', auth.protect, auth.restrictTo('admin', 'staff'),userController.getAllUsers)

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