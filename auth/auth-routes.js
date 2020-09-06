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
    .post(validator, mw.checkIfUsernameExists, authController.registerUser)

router
    .route('/login')
    .post(mw.validateLogin, authController.logIn)




// router.post('/register', validator, mw.checkIfUsernameExists, async (req, res, next) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//         let errMsg = errors.array()[0].msg
//         next(new AppError(errMsg, 400))
//         return
//     }

//     let { name, username, password } = req.body

//     try {
//         password = await bcrypt.hash(password, 10)

//         const newUser = {
//             name,
//             username,
//             password
//         }

//         let user = await db('users').insert(newUser)

//         res.status(201).json({
//             status: 201,
//             message: "User has been created",
//             token: "Some token"
//         })

//     } catch (error) {
//         next(new AppError("Unable to register user", 500))
//     }

// })

router.post('/login', (req, res, next) => { })

module.exports = router