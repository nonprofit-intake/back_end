const express = require('express')
const guestController = require('./guest-controller')
const notesController = require('./notes/notes-controller')
const auth = require('../auth/auth-controller')
const mw = require('./guest-middleware')
const { route } = require('../auth/auth-routes')
const router = express.Router()


// Auth/Verification middleware

router.route('*').all(auth.protect, auth.restrictTo('admin','staff'))
router.route('/:id').all(mw.checkIfGuestExists)


router
    .route('/')
    .get(guestController.getAllGuests)
router
    .route('/:id')
    .get(guestController.getGuest)
    .patch(guestController.updateGuest)
    .delete(guestController.deleteGuest)

router
    .route('/:id/notes')
    .get(notesController.getAllNotes)
    .post(notesController.addNote)
    
module.exports = router