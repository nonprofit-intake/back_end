
const db = require('../data/db-config')
const AppError = require('../utils/AppError')



exports.getAllUsers = (req, res, next) => {
    res.send("All users")
}

exports.getUser = (req, res, next) => {
    res.send("one user")
}

exports.updateUser = (req, res, next) => {
    res.send("user updated")
}

exports.deleteUser = (req, res, next) => {
    res.send("user deleted")
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