
exports.up = function(knex) {
  knex.schema.dropTable('users')
  knex.schema.dropTable('guests')
};

exports.down = function(knex) {
  
};
