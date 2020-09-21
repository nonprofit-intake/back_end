exports.up = function (knex) {
    return knex.schema.createTable("guests", function (guests) {
        guests.increments('personal_id')
        guests.string("org_name", 128).defaultTo("Family Promise Of Spokane")
        guests.string('relationship_to_HoH', 128).notNullable().defaultTo(null)
        guests.string("first_name", 128).notNullable()
        guests.string("last_name", 128).notNullable()
        guests.string('email', 128)
        guests.string('ssn').notNullable()
        guests.uuid("fam_id").notNullable()
        guests.date('dob').notNullable()
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists("guests");
};
