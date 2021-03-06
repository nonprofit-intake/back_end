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
            if(req.query.clocked_in){
                qb.where({clocked_in: true})
            }
            if(req.query.role){
                qb.where({role: req.query.role})
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
        let user = await db('users').where({ id: req.params.id })

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
        const updatedUser = await db('users').where({ id: req.params.id }).update(req.body).returning('*')
        res.status(200).json({
            status: 200,
            user: updatedUser[0]
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
        const user = await db('users').where({ id: req.params.id }).del().returning('*')
        res.status(204).json({
            status: 204,
            message: "User has been deleted"
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

exports.updateMe = async (req,res,next) => {
    try {
        const { id } = req.user

        const updatedFields = {
            clocked_in: req.body.clocked_in,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email
        }

        const updatedUser = await db('users').update(updatedFields).where({id}).returning('*')

        res.status(200).json({
            status: 200,
            payload: {
                user: updatedUser
            }
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            status: 500,
            message: 'Internal Server Error'
        })
    }
}