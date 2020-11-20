const express = require('express')
const famController = require('./fam-controller')
const auth = require('../auth/auth-controller')
const mw = require('./fam-middleware')
const router = express.Router()

router.route('*').all(auth.protect, auth.restrictTo('admin', 'staff'))
router.route('/:id').all(mw.checkIfFamilyExists)
router.route('/:id/members').post(mw.validateFields)

router
    .route('/')
    .get(famController.getAllFamilies)
    .post(famController.registerFamily)
router
    .route('/:id')
    .all(mw.checkIfFamilyExists)
    .get(famController.getFamily)
    .patch(famController.updateFamily)
    .delete(famController.deleteFamily)
router
    .route('/:id/members')
    .get(famController.getAllFamilyMembers)
    .post(famController.addFamilyMember)

module.exports = router