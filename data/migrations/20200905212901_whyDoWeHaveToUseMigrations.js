exports.up = function (knex) {
    return knex.schema.createTable("users", function (users) {
        users.increments();
        users.timestamp('created_at', { precision: 6 }).defaultTo(knex.fn.now(6))
        users.string("role", 16).notNullable().defaultTo('user')
        users.string("name", 128).notNullable();
        users.string("username", 20).notNullable().unique();
        users.string("password", 128).notNullable();
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists("users");
};