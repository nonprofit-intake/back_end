const db = require('../data/db-config')

exports.getAllGuests = async (req, res, next) => {
    try {
        const guests = await db('guests')
        res.status(200).json({
            status: 200,
            results: guests.length,
            payload: {
                guests
            }
        })
    } catch (error) {
        new AppError('Internal Server Error')
    }
}

exports.getGuest = async (req, res, next) => {
    try {
        const guest = await db('guests').where({id: req.params.id})

        res.status(200).json({
            status: 200,
            payload: {
                guest: guest[0]
            }
        })
    } catch (error) {
        new AppError('Internal Server Error')
    }
}

exports.updateGuest = async (req, res, next) => {
    try {
        const guest = await db('guests').update(req.body).where({id: req.params.id}).returning('*')

        

        res.status(200).json({
            status: 200,
            payload: {
                guest: guest[0]
            }
        })
    } catch (error) {
        new AppError('Internal Server Error')
    }
}

exports.deleteGuest = async (req, res, next) => {
    try {
        const guest = await db('guests').where({id: req.params.id}).del()
        res.status(204).json({
            status: 204,
            message: "Successfully deleted guest"
        })
    } catch (error) {
        new AppError('Internal Server Error')
    }
}
