const db = require('../data/db-config')


exports.getAllFamilyMembers = async (req, res, next) => {

    try {
        let user = await db('users').where({ user_id: req.params.id })
        user = user[0]

        const members = await db('guests').where({ fam_id: user.unique_id })
        res.status(200).json({
            status: 200,
            payload: {
                members
            }
        })
    } catch (error) {
        res.send('error')
    }
}

exports.postFamilyMember = async (req, res, next) => {
    const { id } = req.params
    const { relationship_to_HoH, first_name, last_name, email, ssn, dob } = req.body

    try {
        const user = await db('users').where({ user_id: id }).first()

        const member = {
            fam_id: user.unique_id,
            relationship_to_HoH,
            first_name,
            last_name,
            email,
            ssn,
            dob
        }

        console.log(member)

        const new_member = await db('guests')
            .insert(member)
            .returning('*')


        res.status(201).json({
            status: 201,
            payload: {
                member: new_member[0]
            }
        })
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: "Internal server error"
        })
    }
}

exports.updateMember = async (req, res, next) => {
    console.log(req.body)
    console.log(req.params)
    try {
        let result = await db('guests').where({ personal_id: req.params.member_id }).update(req.body).returning('*')
        res.status(200).json({
            status: 200,
            message: "Successfully updated member",
            payload: {
                member: result
            }
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            status: 500,
            message: "Unable to update user"
        })
    }
}

exports.deleteMember = async (req, res, next) => {
    try {
        let result = await db('guests').where({ personal_id: req.params.member_id }).del().returning('*')
        res.status(200).json({
            status: 200,
            message: "Successfully deleted member",
            payload: {
                member: result[0]
            }
        })
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: "Unable to delete member"
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

    }
}