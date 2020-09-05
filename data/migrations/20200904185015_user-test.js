exports.up = function(knex) {
    return knex.schema.createTable("userTest", function(users) {
        users.increments();
        users.string("name", 128).notNullable();
        users.string("email", 128)


        users.string("username", 128).notNullable();
        users.string("password").notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("userTest");
};
