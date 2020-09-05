const AppError = require('../utils/AppError')

exports.validateUserBody = (req, res, next) => {
    if (!req.body.name || !req.body.email || !req.body.username || !req.body.password) {
        const error = new AppError("Please provide a name, email, username and password", 400)
        next(error)
    }
    next()
}