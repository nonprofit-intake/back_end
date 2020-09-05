
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('userTest').del()
    .then(function () {
      // Inserts seed entries
      return knex('userTest').insert([
        {id: 1, name: 'Loralie', notes: "one"},
        {id: 2, name: 'Isaiah', notes: "two"},
        {id: 3, name: 'J', notes: "three"}
      ]);
    });
};
