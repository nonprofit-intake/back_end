
exports.up = function(knex) {
  return knex.schema.table('guests', function(guest){
      guest.text('preferred_language')
      guest.text('city')
  })
};

exports.down = function(knex) {
  
};
