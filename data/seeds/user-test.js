
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('userTest').del()
    .then(function () {
      // Inserts seed entries
      return knex('userTest').insert([
        {id: 1, username: 'Loralie', password: "one"},
        {id: 2, username: 'Isaiah', password: "two"},
        {id: 3, username: 'J', password: "three"}
      ]);
    });
};
