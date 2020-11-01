exports.up = function(knex) {
    return knex.schema.table('guests', function(guest){
        guest.dropColumn('sexual_orientation')
        guest.dropColumn('enroll_status')
        guest.dropColumn('runaway_youth')
        guest.dropColumn('reason_why_no_services_funded')
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.table('guests', function(guest){
        guest.text('sexual_orientation')
        guest.text('enroll_status')
        guest.text('runaway_youth')
        guest.text('reason_why_no_services_funded')
    })
  };