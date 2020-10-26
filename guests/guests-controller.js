const db = require("../data/db-config");
const AppError = require("../utils/AppError");

exports.getAllGuests = async (req, res, next) => {
  try {
    const guests = await db("guests");
    res.status(200).json({
      status: 200,
      payload: {
        guests,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: "Unable to get all guests",
    });
  }
};

exports.getGuest = async (req, res, next) => {
  const { id } = req.params;
  try {
    const guest = await db("guests").where({ personal_id: id }).first();

    res.status(200).json({
      status: 200,
      payload: {
        guest,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: "Unable to retrive guest",
    });
  }
};

exports.getAllFamilyMembers = async (req, res, next) => {
  try {
    const members = await db("guests").where({ fam_id: req.params.fam_id });
    res.status(200).json({
      status: 200,
      payload: {
        members,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 500,
      message: "Unable to retrieve users",
    });
  }
};

exports.updateGuest = async (req, res, next) => {
  try {
    let result = await db("guests")
      .where({ personal_id: req.params.member_id })
      .update(req.body)
      .returning("*");
    res.status(200).json({
      status: 200,
      message: "Successfully updated member",
      payload: {
        member: result,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: "Unable to update user",
    });
  }
};

exports.deleteGuest = async (req, res, next) => {
  try {
    let result = await db("guests")
      .where({ personal_id: req.params.member_id })
      .del()
      .returning("*");
    res.status(200).json({
      status: 200,
      message: "Successfully deleted member",
      payload: {
        member: result[0],
      },
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: "Unable to delete member",
    });
  }
};

exports.addFamilyMember = async (req, res, next) => {
  const { fam_id } = req.params;
  const {
    relationship_to_HoH,
    first_name,
    last_name,
    email,
    ssn,
    dob,
  } = req.body;

  try {
    const member = {
      fam_id,
      relationship_to_HoH,
      first_name,
      last_name,
      email,
      ssn,
      dob,
    };

    const new_member = await db("guests").insert(member).returning("*");

    res.status(201).json({
      status: 201,
      payload: {
        member: new_member[0],
      },
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: "Internal server error",
    });
  }
};
