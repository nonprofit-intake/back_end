const express = require('express')
const router = express.Router()
const { body, check, validationResult } = require('express-validator');
const AppError = require('../utils/AppError');
const db = require('../data/db-config')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const mw = require('./auth-middleware')

const authController = require('./auth-controller')

router
    .route('/register')
    .post(authController.registerUser)

router
    .route('/login')
    .post(authController.logIn)

router
    .route('/staff/register')
    .post(
        authController.protect, 
        authController.restrictTo('staff', 'admin'), 
        mw.validate,
        authController.registerUserAsGuest
    )
module.exports = router