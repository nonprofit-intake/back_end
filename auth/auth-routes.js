const express = require('express')
const router = express.Router()
const { body, check, validationResult } = require('express-validator');
const AppError = require('../utils/AppError');
const db = require('../data/db-config')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const mw = require('./auth-middleware')

const authController = require('./auth-controller')

const validator = [

    body('password')
        .exists()
        .withMessage("Please provide a password")
        .isLength({ min: 10 })
        .withMessage("Password must be at least 10 characters long")
        .isLength({ max: 128 })
        .withMessage("Password must be between 10 and 128 characters")
    ,
    // username must exist
    body('username')
        .exists()
        .withMessage("Please provide a username")
        .isLength({ min: 4, max: 20 })
        .withMessage("Username must be between 4 and 20 characters")
    ,
    // name must exist
    body('name')
        .exists()
        .withMessage("Please provide a name")
]


router
    .route('/register')
    .post(authController.registerUser)

router
    .route('/login')
    .post(authController.logIn)

router
    .route('/staff/register')
    .post(authController.protect, authController.restrictTo('staff', 'admin'), authController.registerUserAsGuest)
module.exports = router