const db = require('../data/db-config')
const AppError = require('../utils/AppError')

exports.validateUserId = async (req, res, next) => {
    const { id } = req.params
    try {
        const user = await db('users').where({ user_id: id })
        if (user.length == 0) {
            return next(new AppError(`Couldn't find user with id of ${id}`, 404))
        }
        next()
    } catch (error) {
        return next(new AppError("Internal Server Error", 500))
    }
}

exports.validateMemberId = async (req, res, next) => {
    const { member_id } = req.params
    console.log(member_id)
    try {
        const member = await db('guests').where({ personal_id: member_id })

        if (member.length == 0) {
            return next(new AppError(`Couldn't find member with id of ${member_id}`, 404))
        }
        next()
    } catch (error) {
        return next(new AppError("Internal Server Error", 500))
    }
}

exports.validateMemberBody = async (req, res, next) => {

}