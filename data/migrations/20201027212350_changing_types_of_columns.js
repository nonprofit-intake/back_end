exports.up = function (knex) {
  return knex.schema.table("guests", function (tbl) {
    tbl.dropColumn("in_school");
    tbl.dropColumn("stayed_7_or_less");
    tbl.dropColumn("stayed_90_or_less");
    tbl.dropColumn("stayed_street_ES_or_SH_night_before");
    tbl.dropColumn("zip");
    tbl.dropColumn("rrh_in_perm_housing");
    tbl.dropColumn("program_type");
  });
};

exports.down = function (knex) {};
