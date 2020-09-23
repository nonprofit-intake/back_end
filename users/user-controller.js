const db = require('../data/db-config')

exports.getAllUsers = async (req, res, next) => {


    try {
        const users = await db('users').modify(qb => {
            if (req.query.isAuthorized) {
                qb.where({ isAuthorized: req.query.isAuthorized })
            }
            if (req.query.role) {
                qb.where({ role: req.query.role })
            }
        })
        res.status(200).json({
            status: 200,
            results: users.length,
            payload: {
                users
            }
        })
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: "Unable to retrieve users"
        })
    }

}

exports.getUser = async (req, res, next) => {
    try {
        let user = await db('users').where({ user_id: req.params.id })

        res.status(200).json({
            status: 200,
            payload: {
                user: user[0]
            }
        })
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: "Unable to retrieve user"
        })
    }
}

exports.updateUser = async (req, res, next) => {
    try {
        const updatedUser = await db('users').where({ user_id: req.params.id }).update(req.body).returning('*')
        res.status(200).json({
            status: 200,
            user: updatedUser
        })
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: "Unable to update user"
        })
    }
}

exports.deleteUser = async (req, res, next) => {
    try {

        const user = await db('users').where({ user_id: req.params.id }).del().returning('*')
        res.status(200).json({
            status: 200,
            message: "User has been deleted",
            payload: {
                user
            }
        })
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: "Unable to delete user"
        })
    }
}

exports.me = async (req, res, next) => {
    try {
        res.json({
            status: 200,
            payload: {
                user: req.user
            }
        })
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: 'Could not retrieve user'
        })
    }
}