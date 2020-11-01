exports.up = function (knex) {
  return knex.schema.table("guests", function (tbl) {
    tbl.text("reason_for_not_having_id");
    tbl.text("drivers_liscense");
    tbl.text("passport");
    tbl.text("military_card");
    tbl.text("state_issued_id");
    tbl.text("alternative_id");
    tbl.text("personal_phone_number");
    tbl.text("home_phone_number");
    tbl.text("emergency_contact_number");
    tbl.text("emergency_contact_name");
  });
};

exports.down = function (knex) {
  return knex.schema.table("guests", function (tbl) {
    tbl.dropColumn("drivers_liscense");
    tbl.dropColumn("passport");
    tbl.dropColumn("military_card");
    tbl.dropColumn("state_issued_id");
    tbl.dropColumn("alternative_id");
    tbl.dropColumn("personal_phone_number");
    tbl.dropColumn("home_phone_number");
    tbl.dropColumn("emergency_contact_number");
    tbl.dropColumn("emergency_contact_name");
  });
};
