const { getAllGuests } = require("../../guests/guests-controller");

exports.up = function(knex) {
  knex.schema.table('users', function(user){
      user.boolean('clocked_in').defaultTo(false)
      user.boolean('staying_the_night').defaultTo(false)
  })
};

exports.down = function(knex) {
    knex.schema.table('users', function(user){
        user.dropColumn('clocked_in')
        user.dropColumn('staying_the_night')
    })
};
