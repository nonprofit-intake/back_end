
const db = require('../data/db-config')
const AppError = require('../utils/AppError')



exports.getAllUsers = async (req, res, next) => {
    const users = await db('users')
    try {
        res.status(200).json({
            status: 200,
            results: users.length,
            payload: {
                users
            }
        })
    } catch (error) {
        next(new AppError("Unable to retrieve users", 500))
    }
}

exports.getUser = async (req, res, next) => {
    const { id } = req.params
    try {
        const user = await db('users').where({ id }).first()
        user.password = undefined
        res.status(200).json({
            status: 200,
            payload: {
                user
            }
        })
    } catch (error) {
        next(new AppError("Unable to retrieve user", 500))
    }
}

exports.updateUser = async (req, res, next) => {
    const { id } = req.params
    try {
        let result = await db('users').where({ id }).update(req.body).returning('*')
        res.status(200).json({
            status: 200,
            payload: {
                user: result
            }
        })
    } catch (error) {
        console.log(error)
        next(new AppError("Unable to update user", 500))
    }
}

exports.deleteUser = async (req, res, next) => {
    const { id } = req.params
    try {
        let result = await db('users').where({ id }).del()

        if(!result){
            return next(new AppError("unable to delete user", 500))
        }

        res.status(200).json({
            status: 200,
            message: "user has been deleted",
            payload: {
                user: result
            }
        })
    } catch (error) {
        next(new AppError("Unable to delete user", 500))
    }
}

exports.getCurrentUser = (req, res, next) => {

    if (!req.user) {
        next(new AppError("Unable to get current user", 500))
    }

    res.status(200).json({
        status: 200,
        payload: {
            user: req.user
        }
    })
}