exports.up = function (knex) {
  return knex.schema.table("guests", function (tbl) {
    tbl.text("covered_by_state");
    tbl.text("foodstamps");
    tbl.text("cps_or_fps");
    tbl.text("rrh");
    tbl.text("housing_voucher");
    tbl.text("veteran_services");
    tbl.text("snap_assistance");
    tbl.text("income_source");
    tbl.text("employer");
    tbl.text("school_name");
    tbl.text("school_type");
    tbl.text("attendance_status");
    tbl.text("middle_name");
  });
};

exports.down = function (knex) {
  return knex.schema.table("guests", function (tbl) {
    tbl.dropColumn("covered_by_state");
    tbl.dropColumn("foodstamps");
    tbl.dropColumn("cps_or_fps");
    tbl.dropColumn("rrh");
    tbl.dropColumn("housing_voucher");
    tbl.dropColumn("veteran_services");
    tbl.dropColumn("snap_assistance");
    tbl.dropColumn("income_source");
    tbl.dropColumn("employer");
    tbl.dropColumn("school_name");
    tbl.dropColumn("school_type");
    tbl.dropColumn("attendance_status");
    tbl.dropColumn("middle_name");
  });
};
