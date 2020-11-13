
exports.up = function (knex) {
  return knex.schema.createTable("guests", function (guests) {

    guests.uuid("fam_id").notNullable();
    guests.increments("guest_id");

    // other

    guests.text('exit_destination')
    guests.integer('entire_episode_bednights')
  
    // Basic information
    
    guests.string("first_name", 128)
    guests.string("last_name", 128)
    guests.string("middle_name", 128)
    guests.string("relationship_to_HoH", 128).notNullable().defaultTo(null);
    
    // Client demographics
    
    guests.date("dob")
    guests.date('pregnancy_due_date')

    guests.boolean("is_pregnant", 128)
    guests.boolean("vet_status");

    guests.integer("age_at_enrollment");
    guests.integer("current_age");

    guests.text("ethnicity", 128)
    guests.text("race", 128)
    guests.text("gender", 128)
    guests.text("preferred_language", 128)
    guests.text("sexual_orientation", 128)

    // Contact information
    
    guests.text("home_phone");
    guests.text("work_phone")
    guests.text('personal_phone_number')
    guests.text('alternative_phone_number')
    guests.text("emergency_contact_name")
    guests.text("emergency_contact_number")

    // ID
    
    guests.text('identification_type')
    guests.text('identification_value')
    guests.text('last_4_digits_of_ssn')

    // Programs

    guests.boolean("covered_by_state");
    guests.boolean("foodstamps");
    guests.boolean("cps_or_fps");
    guests.boolean("rrh");
    guests.boolean("housing_voucher");
    guests.boolean("veteran_services");
    guests.boolean("snap_assistance");
    
    // Program

    guests.string("program_type");
    
    // Income    

    guests.text("employer");
    guests.text('income_source')
    guests.float("income_at_entry");
    guests.float("income_at_update");
    guests.float("income_at_exit");

    // Locations

    guests.text("last_perm_address");
    guests.text("city");
    guests.text("state");
    guests.text("zip");

    // Homelessness info

    guests.date("homeless_start_date");
    guests.text("housing_status");
    guests.text("living_situation");
    guests.text("length_of_stay");
    guests.text("times_homeless_last_3years");
    guests.text("total_months_homeless");

    // income sources/insurance

    guests.boolean("employment");
    guests.boolean("covered_by_health_insurance");
    guests.boolean("other_public");
    guests.boolean("state_funded");
    guests.boolean("indian_health_services");
    guests.boolean("other");
    guests.boolean("combined_childrens_health_insurance");
    guests.boolean("medicaid");
    guests.boolean("medicare");
    guests.boolean("CHIP");
    guests.boolean("VAMS");
    guests.boolean("COBRA");
    guests.boolean("Private_employer");
    guests.boolean("private");
    guests.boolean("private_individual");

    // Barriers

    guests.boolean("chronic_health_condition");
    guests.boolean("alcohol_abuse");
    guests.boolean("developmental_disability");
    guests.boolean("substance_abuse");
    guests.boolean("HIV_AIDS");
    guests.boolean("mental_health_problem");
    guests.boolean("physical_disability");

    guests.text('documented_disabilites')
    guests.text('indefinite_conditions')

    // Domestic Violence
    
    guests.boolean("domestic_violence");
    guests.boolean("currently_fleeing");

    guests.text("when_dv_occured");

    // Education

    guests.boolean("in_school");
    guests.boolean("connected_to_MVento");
    guests.text("last_grade_completed");
    guests.text("school_status");
    guests.text("current_status");
    guests.text('school_type')
    guests.text('school_name')
    guests.text('reason_for_not_being_enrolled')

    // vehicle

    guests.text('vehicle_make')
    guests.text('model')
    guests.text('year')
    guests.text('color')
    guests.text('liscence')











    // guests.text("client_location");
    // guests.text("race");
    // guests.text("ethnicity");
    // guests.text("gender");
    // guests.text("disabling_cond_at_entry");
    // guests.text("living_situation");
    // guests.text("length_of_stay");
    // guests.text("times_homeless_last_3years");
    // guests.text("total_months_homeless");
 
    // guests.text("state");
    // guests.text("municipality");
    // guests.text("days_enrolled_until_rrh_movein");
    // guests.text("housing_status");
    // guests.text("covered_by_health_insurance");
    // guests.text("domestic_violence");
    // guests.text("currently_fleeing");
    // guests.text("when_dv_occured");
    // guests.text("days_enrolled_until_engaged");
    // guests.text("current_status");
    // guests.text("connected_to_MVento");
    // guests.text("household_type");
    // guests.text("last_grade_completed");
    // guests.text("school_status");
    // guests.text("employed_status");
    // guests.text("reason_not_employed");
    // guests.text("type_of_employment");
    // guests.text("looking_for_work");

    // guests.text("info_release_status");
    // guests.text("soar_eligibility");
    // guests.text("most_recent_rrh");
    // guests.text("most_recent_street_outreach");
    // guests.text("most_recent_CE");
    // guests.text("most_recent_ES");
    // guests.text("most_recent_trans");
    // guests.text("most_recent_PSH");
    // guests.text("most_recent_prevention");
    // guests.text("under_25");
    // guests.text("alcohol_abuse");
    // guests.text("chronic_health_condition");
    // guests.text("developmental_disability");
    // guests.text("substance_abuse");
    // guests.text("HIV_AIDS");
    // guests.text("mental_health_problem");
    // guests.text("physical_disability");
    // guests.text("other_public");
    // guests.text("state_funded");
    // guests.text("indian_health_services");
    // guests.text("other");
    // guests.text("combined_childrens_health_insurance");
    // guests.text("medicaid");
    // guests.text("medicare");
    // guests.text("CHIP");
    // guests.text("VAMS");
    // guests.text("COBRA");
    // guests.text("Private_employer");
    // guests.text("private");
    // guests.text("private_individual");
    // guests.text("home_phone");
    // guests.text("work_phone");

    // // Verify later

    // guests.float("stayed_7_or_less");
    // guests.float("stayed_90_or_less");
    // guests.float("stayed_street_ES_or_SH_night_before");
    // guests.text("length_of_time_homeless");
    // guests.float("zip");
    // guests.float("rrh_in_perm_housing");
    // guests.date("rrh_date_of_move-in");
    // guests.boolean("in_school");

    // guests.text("general_health_status");
    // guests.text("dental_health_status");
    // guests.text("mental_health_status");
    // guests.text("pregnancy_status");
    // guests.date("pregnancy_due_date");
    // guests.text("soar_enrollment");
    // guests.float("earned_income");
    // guests.integer("program_type");

    // // *

    // guests.date("date_status_determined");
    // guests.float("latitude");
    // guests.float("longitude");
    // guests.float("referal_source");
    // guests.float("enroll_status");
    // guests.float("runaway_youth");
    // guests.float("reason_why_no_services_funded");
    // guests.float("sexual_orientation");
    // guests.float("infoReleaseNo");
    // guests.float("income_at_entry");
    // guests.float("income_at_update");
    // guests.float("income_at_exit");
    // guests.float("bednights_during_report_period");
    // guests.float("entire_episode_bednights");
    // guests.float("most_recent_HEN-HP");
    // guests.float("most_recent_HEN-RRH");
    // guests.float("most_recent_worksource");
    // guests.float("most_recent_YAHP");
    // guests.float("supplemental_security_income");
    // guests.float("child_support");
    // guests.integer("case_members");
    // guests.integer("age_at_enrollment");
    // guests.integer("current_age");
    // guests.integer("days_enrolled_in_project");
    // guests.integer("contact_services");
    // guests.integer("housing_checkins");
    // guests.integer("non-cash_benefit_count");
    // guests.integer("non-cash_count_at_exit");
    // guests.integer("barrier_count_at_entry");
    // guests.integer("chronic_homeless_status");
    // guests.integer("client_id");
    // guests.integer("case_children");
    // guests.integer("case_adults");
    // guests.integer("unemployement_income");
    // guests.integer("social_security_disability_income");
    // guests.integer("VA_disability_compensation");
    // guests.integer("VA_disability_pension");
    // guests.integer("private_disability_income");
    // guests.integer("workers_compensation");
    // guests.integer("TANF");
    // guests.integer("general_assistance");
    // guests.integer("retirement_social_security");
    // guests.integer("pension_from_former_job");
    // guests.integer("alimony");
    // guests.integer("other_income");
    // guests.integer("chronic_homeless_status_assessment");
    // guests.integer("chronic_homeless_status_evaluation");
    // guests.date("enroll_date");
    // guests.date("exit_date");
    // guests.date("exit_destination");
    // guests.date("homeless_start_date");
    // guests.date("engagement_date");
    // guests.date("date_of_last_contact");
    // guests.date("date_of_first_contact");
    // guests.date("date_of_last_stay");
    // guests.date("date_of_first_stay");
    // guests.date("current_date");
    // guests.boolean("client_record_restricted");
    // guests.integer("case_id");
    // guests.text("project_name");
    // guests.text("project_type");
    // guests.text("util_track_method");
    // guests.text("fed_grant_programs");
    // guests.text("enrollment_created_by	");
    // guests.integer("index");
    // guests.increments("personal_id");
    // guests.string("org_name", 128).defaultTo("Family Promise Of Spokane");
  
    // guests.string("email", 128);
    // guests.string("ssn").notNullable();
    // guests.uuid("fam_id").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("guests");
};
