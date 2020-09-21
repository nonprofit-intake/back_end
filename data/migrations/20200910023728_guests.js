exports.up = function (knex) {
    return knex.schema.createTable("hoh", function (hoh) {
        hoh.string("org_name", 128).defaultTo("Family Promise Of Spokane")
        hoh.string("first_name", 128).notNullable()
        hoh.string("last_name", 128).notNullable()
        hoh.string('email').notNullable()
        hoh.string('password', 128).notNullable()
        hoh.string('ssn').notNullable()
        hoh.integer("fam_id").notNullable()
        hoh.date('dob').notNullable()
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists("hoh");
};
