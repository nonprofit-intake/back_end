exports.up = function (knex) {
  return knex.schema.table("users", function (user) {
    user.dropColumn("last_4_digits_of_ssn");
  });
};

exports.down = function (knex) {
  return knex.schema.table("users", function (user) {
    user.text("last_4_digits_of_ssn");
  });
};
