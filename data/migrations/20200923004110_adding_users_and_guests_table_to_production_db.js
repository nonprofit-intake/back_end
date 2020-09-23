
exports.up = function (knex) {
    knex.schema.createTable("users", function (users) {
        users.increments('user_id')
        users.uuid('unique_id').unique().notNullable()
        users.string("org_name", 128).defaultTo("Family Promise Of Spokane")
        users.string("first_name", 128).notNullable()
        users.string("last_name", 128).notNullable()
        users.string('email').notNullable().unique()
        users.string('password', 128).notNullable()
        users.string('last_4_digits_of_ssn').notNullable()
        users.enu('role', ['staff', 'admin', 'guest', 'public']).notNullable().defaultTo('public')
        users.boolean("isAuthorized").notNullable().defaultTo(false)
    });
    knex.schema.createTable('guests', function (guests) {
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
    })
};

exports.down = function (knex) {
    knex.schema.dropTable('guests')
    knex.schema.dropTable('users')

};
