exports.up = function (knex) {
    return knex.schema.createTable("users", function (users) {
        users.increments();
        users.string("name", 128).notNullable();
        users.string("username", 20).notNullable().unique();
        users.string("password", 128).notNullable();
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists("users");
};