// const AppError = require('../utils/AppError')
// const db = require('../data/db-config')


// exports.checkIfUsernameExists = async (req, res, next) => {
//     try {
//         const { username } = req.body
//         let result = await db('users').where({ username: username })

//         result.length == 0 ? next() : next(new AppError("Username is already taken", 400))

//     } catch (error) {
//         next(new AppError("Internal server error", 500))
//     }
// }

// exports.validateLogin = (req, res, next) => {
//     if (!req.body.username || !req.body.password) {
//         return next(new AppError("Please provide a username and password", 400))
//     }
//     next()
// }



