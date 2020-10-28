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

  try {
    const {
      // new
      relationship_to_HoH,
      first_name,
      last_name,
      email,
      dob,
      ssn,
      enroll_date,
      gender,
      last_perm_address,
      zip,
      state,
      stayed_street_ES_or_SH_night_before,
      length_of_stay,
      stayed_7_or_less,
      stayed_90_or_less,
      times_homeless_last_3years,
      homeless_start_date,
      total_months_homeless,
      prior_address,
      covered_by_health_insurance,
      date_of_first_stay,
      medicaid,
      medicare,
      CHIP,
      VAMS,
      COBRA,
      Private_employer,
      private,
      covered_by_state,
      state_funded,
      other,
      combined_childrens_health_insurance,
      domestic_violence,
      currently_fleeing,
      when_dv_occured,
      foodstamps,
      cps_or_fps,
      rrh,
      housing_voucher,
      veteran_services,
      snap_assistance,
      income_at_entry,
      income_at_exit,
      ethnicity,
      income_source,
      employer,
      race,
      alcohol_abuse,
      developmental_disability,
      chronic_health_condition,
      substance_abuse,
      HIV_AIDS,
      mental_health_problem,
      physical_disability,
      last_grade_completed,
      in_school,
      current_status,
      connected_to_MVento,
      home_phone,
      school_name,
      school_type,
      attendance_status,
      middle_name,
      current_age,
    } = req.body;

    const member = {
      fam_id,
      relationship_to_HoH,
      first_name,
      last_name,
      email,
      ssn,
      dob,
      enroll_date,
      gender,
      last_perm_address,
      zip,
      state,
      stayed_street_ES_or_SH_night_before,
      length_of_stay,
      stayed_7_or_less,
      stayed_90_or_less,
      times_homeless_last_3years,
      homeless_start_date,
      total_months_homeless,
      prior_address,
      covered_by_health_insurance,
      date_of_first_stay,
      medicaid,
      medicare,
      CHIP,
      VAMS,
      COBRA,
      Private_employer,
      private,
      covered_by_state,
      state_funded,
      other,
      combined_childrens_health_insurance,
      domestic_violence,
      currently_fleeing,
      when_dv_occured,
      foodstamps,
      cps_or_fps,
      rrh,
      housing_voucher,
      veteran_services,
      snap_assistance,
      income_at_entry,
      income_at_exit,
      ethnicity,
      income_source,
      employer,
      race,
      alcohol_abuse,
      developmental_disability,
      chronic_health_condition,
      substance_abuse,
      HIV_AIDS,
      mental_health_problem,
      physical_disability,
      last_grade_completed,
      in_school,
      current_status,
      connected_to_MVento,
      home_phone,
      school_name,
      school_type,
      last_grade_completed,
      attendance_status,
      middle_name,
      current_age,
      ssn,
    };

    const new_member = await db("guests").insert(member).returning("*");

    res.status(201).json({
      status: 201,
      payload: {
        member: new_member[0],
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 500,
      message: "Internal server error",
    });
  }
};
