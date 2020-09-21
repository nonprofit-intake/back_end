const db = require('../data/db-config')

exports.getAllUsers = async (req, res, next) => {
    try {
        const users = await db('users')
        res.status(200).json({
            status: 200,
            results: users.length
            ,
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
        let user = await db('users').where({user_id: req.params.id})

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
        
    } catch (error) {
        
    }
}

exports.deleteUser = async (req, res, next) => {

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

    }
}