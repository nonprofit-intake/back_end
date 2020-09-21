exports.up = function (knex) {
    return knex.schema.table("users", function (users) {
        users.renameColumn("last_4_digits_of_ssn", "pin")
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists("users");
};