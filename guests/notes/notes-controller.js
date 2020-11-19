const AppError = require("../../utils/AppError")
const db = require('../../data/db-config')

exports.getAllNotes = async (req,res,next) => {
    try {
        const notes = await db('notes').where({guest_id: req.params.id})

        res.status(200).json({
            status: 200,
            results: notes.length,
            payload: {
                notes
            }
        })
    } catch (error) {
        new AppError('Internal Server Error')
    }
}

exports.addNote = async (req,res,next) => {
    const newNote = {
        ...req.body,
        guest_id: req.params.id
    }
    try {
        const note = await db('notes').insert(newNote).returning('*')

        res.status(201).json({
            status: 201,
            payload: {
                note: note[0]
            }
        })
    } catch (error) {
        console.log(error)
        next(new AppError('Internal Server Error'))
    }
}