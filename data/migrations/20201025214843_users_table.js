exports.up = function (knex) {
  return knex.schema.createTable("users", function (users) {
    users.increments("user_id");
    users.uuid("unique_id").unique().notNullable();
    users.string("org_name", 128).defaultTo("Family Promise Of Spokane");
    users.string("first_name", 128).notNullable();
    users.string("last_name", 128).notNullable();
    users.string("email").notNullable().unique();
    users.string("password", 128).notNullable();
    users.string("last_4_digits_of_ssn").notNullable();
    users
      .enu("role", ["staff", "admin", "guest", "public"])
      .notNullable()
      .defaultTo("public");
    users.boolean("isAuthorized").notNullable().defaultTo(false);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("users");
};
