


exports.up = function(knex) {
    return knex.schema.createTable("userTest", function(users) {
        users.increments();
        users.string("username", 128).notNullable();
        users.string("password").notNullable();

    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("userTest");
};
