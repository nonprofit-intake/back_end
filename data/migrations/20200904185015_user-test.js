exports.up = function (knex) {
    return knex.schema.createTable("userTest", function (users) {
        users.increments();
        users.string("role", 16).notNullable().defaultTo('user')
        users.string("name", 128).notNullable();
        users.string("username", 128).notNullable();
        users.string("password").notNullable();
        users.timestamp('created_at', { precision: 6 }).defaultTo(knex.fn.now(6))
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists("userTest");
};
