const db = require('../data/db-config')
const { body, check, validationResult } = require('express-validator');
const AppError = require('../utils/AppError')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

exports.registerUser = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        let errMsg = errors.array()[0].msg
        return next(new AppError(errMsg, 400))
    }

    let { name, username, password } = req.body

    try {
        password = await bcrypt.hash(password, 10)

        const newUser = {
            name,
            username,
            password
        }

        let user = await db('users').insert(newUser).returning('*')

        user = user[0]

        // Hide the password before sending it to client
        user.password = undefined

        const token = signToken(user.id)

        res.status(201).json({
            status: 201,
            token,
            payload: {
                user
            }
        })

    } catch (error) {
        console.log(error)
        next(new AppError("Unable to register user", 500))
    }
}


exports.logIn = async (req, res, next) => {
    const { username, password } = req.body

    try {
        let user = await db.select('username', 'password', 'id').from('users').where({ username })

        // Check if user exists
        user.length == 0 ? next(new AppError("User does not exist", 404)) : next()
        user = user[0]

        // Compare passwords
        let passwordIsCorrect = await bcrypt.compare(password, user.password)

        if (!passwordIsCorrect) {
            return next(new AppError("Invalid username or password", 404))
        }

        const token = signToken(user.id)

        res.status(200).json({
            status: 200,
            message: "Welcome back",
            payload: {
                token
            }
        })


    } catch (error) {
        next(new AppError("Internal server error", 500))
    }
}

function signToken(id) {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    })
}