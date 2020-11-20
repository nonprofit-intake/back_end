const db = require('../data/db-config')
const AppError = require('../utils/AppError')

exports.validateUserId = async (req, res, next) => {
    const { id } = req.params
    try {
        const user = await db('users').where({ id: id })
        if (user.length == 0) {
            return next(new AppError(`Couldn't find user with id of ${id}`, 404))
        }
        next()
    } catch (error) {
        return next(new AppError("Internal Server Error", 500))
    }
}

