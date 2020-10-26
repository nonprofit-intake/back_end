const express = require("express");
const guestsController = require("./guests-controller");
const router = express.Router();
const auth = require("../auth/auth-controller");

router.use(auth.protect).route("/").get(guestsController.getAllGuests);

router.use(auth.protect)
    .route("/:id")
    .get(guestsController.getGuest);

router
  .route("/family/:fam_id")
  .get(guestsController.getAllFamilyMembers)
  .post(guestsController.addFamilyMember);
router
  .route("/family/:fam_id/:member_id")
  .delete(guestsController.deleteGuest)
  .patch(guestsController.updateGuest);

module.exports = router;
