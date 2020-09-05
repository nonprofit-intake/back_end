


exports.up = function(knex) {
    return knex.schema.createTable("userTest", function(actions) {
        actions.increments();
        actions.string("name", 128).notNullable();
        actions.string("notes").notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("actions");
};
