const db = require('../data/db-config')
const AppError = require('../utils/AppError')

exports.checkIfGuestExists = async (req,res,next) => {
    try {
        const guest = await db('guests').where({id: req.params.id})
        let errMessage = `Guest with id of ${req.params.id} does not exist`
        guest.length == 0 ? next(new AppError(errMessage, 404)) : next()
    } catch (error) {
        next(new AppError('Internal Server Error', 500))
    }
}

exports.validateFields = (req,res,next) => {
    if(!req.body.relationship_to_HoH || !req.body.first_name || !req.body.last_name){
        return next(new AppError('Required fields - first_name, last_name, relationship_to_HoH'))
    }
    next()
} 