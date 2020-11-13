const AppError = require('../utils/AppError')
const db = require('../data/db-config')


exports.validate = async (req, res, next) => {
    if (!req.body.email || !req.body.password) {
        return next(new AppError("Please provide an email and password", 400))
    }
    
    try {
        const { email } = req.body
        let result = await db('users').where({ email })

        result.length == 0 ? next() : next(new AppError("Email is already taken", 400))

    } catch (error) {
        next(new AppError("Internal server error", 500))
    }
}




