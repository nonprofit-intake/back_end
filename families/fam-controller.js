const db = require('../data/db-config')
const AppError = require('../utils/AppError')

exports.getAllFamilies = async (req, res, next) => {
    try {
        const families = await db('families')

        res.status(200).json({
            status: 200,
            results: families.length,
            payload: {
                families
            }
        })
    } catch (error) {
        next(new AppError('Internal Server Error', 500))
    }
}

exports.registerFamily = async (req, res, next) => {
    try {
        let family = await db('families').insert(req.body).returning('*')
        
        family = family[0]

        res.status(201).json({
            status: 201,
            message: 'Successfully registered family',
            payload: {
                family
            }
        })
    } catch (error) {
        console.log(error)
        next(new AppError('Internal Server Error', 500))
    }
}

exports.addFamilyMember = async (req,res,next) => {

    const newMember = {
        ...req.body,
        fam_id: req.params.id
    }

    try {
        const member = await db('guests').insert(newMember).returning('*')

        res.status(201).json({
            status: 201,
            message: 'Successfully added family member',
            payload: {
                member: member[0]
            }
        })

    } catch (error) {
        console.log(error)

        next(new AppError('Internal Server Error', 500))
    }
}

exports.getAllFamilyMembers = async (req,res,next) => {
    try {
        const members = await db('guests').where({ fam_id: req.params.id })

        res.status(200).json({
            status: 200,
            results: members.length,
            payload: {
                members
            }
        })
    } catch (error) {
        console.log(error)
        next(new AppError('Internal Server Error', 500))
    }
}

exports.getFamily = async (req, res, next) => {
    try {
        const family = await db('families').where({id: req.params.id}).first()

        res.status(200).json({
            status: 200,
            payload: {
                family
            }
        })
    } catch (error) {
        next(new AppError('Internal Server Error', 500))
    }

}

exports.updateFamily = async (req, res, next) => {
    try {
        const family = await db('families').update(req.body).where({id: req.params.id}).returning('*')

        res.status(200).json({
            status: 200,
            payload: {
                family: family[0]
            }
        })
    } catch (error) {
        next(new AppError('Internal Server Error', 500))
    }
}

exports.deleteFamily = async (req, res, next) => {
    try {
        const family = await db('families').where({id: req.params.id}).del().returning('*')

        res.status(200).json({
            status: 200,
            payload: {
                family: family[0]
            }
        })
    } catch (error) {
        console.log(error)
        next(new AppError('Internal Server Error', 500))
    }
}
