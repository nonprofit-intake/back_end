exports.up = function (knex) {
  return knex.schema.table("users", function (user) {
    user.text("pin");
  });
};

exports.down = function (knex) {
  return knex.schema.table("users", function (user) {
    user.dropColumn("pin");
  });
};
