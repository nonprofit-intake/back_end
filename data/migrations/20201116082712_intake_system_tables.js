exports.up = function (knex) {
    return knex.schema.createTable("families", tbl => {
        tbl.increments()
        tbl.text("project_name").defaultTo('FPS--ES--Open Doors');
        tbl.text('enrollment_created_by')

        tbl.integer('case_children')
        tbl.integer('case_adults')
        tbl.integer('total_bednights')

        tbl.date('enroll_date').defaultTo(knex.fn.now())
        tbl.date('exit_date')
        tbl.text('exit_destination')

        // Homelessness info

        tbl.date('homeless_start_date')
        tbl.integer('length_of_time_homeless')
        tbl.text('times_homeless_last_3years')
        tbl.text('total_months_homeless')
        tbl.text('housing_status')

        // Location info

        tbl.text('state')
        tbl.text('zip')
        tbl.text('city')
        tbl.text('living_situation')
        tbl.text('last_perm_address')
        
        // Contact information

        tbl.text('personal_phone')
        tbl.text('work_phone')
        tbl.text('emergency_contact_name')
        tbl.text('emergency_contact_number')

        // Health insurance

        tbl.boolean('other_public')
        tbl.boolean('state_funded')
        tbl.boolean('indian_health_services')
        tbl.boolean('other')
        tbl.boolean('combined_childrens_health_insurance')
        tbl.boolean('medicaid')
        tbl.boolean('medicare')
        tbl.boolean('CHIP')
        tbl.boolean('VAMS')
        tbl.boolean('Private_employer')
        tbl.boolean('private')
        tbl.boolean('private_individual')
        
        // Government Programs

        tbl.integer('earned_income')
        tbl.integer('unemployement_income')
        tbl.integer('supplemental_security_income')
        tbl.integer('social_security_disability_income')
        tbl.integer('VA_disability_compensation')
        tbl.integer('VA_disability_pension')
        tbl.integer('private_disability_income')
        tbl.integer('workers_compensation')
        tbl.integer('TANF')
        tbl.integer('general_assistance')
        tbl.integer('retirement_social_security')
        tbl.integer('pension_from_former_job')
        tbl.integer('child_support')
        tbl.integer('other_income')
        
        // Domestic Violence
        
        tbl.boolean('domestic_violence')
        tbl.boolean('currently_fleeing')
        tbl.text('when_dv_occured')

        // Vehicle information

        tbl.text('vehicle_make')
        tbl.text('vehicle_model')
        tbl.text('vehicle_year')
        tbl.text('vehicle_color')
        tbl.text('vehicle_lic')

        // other

        tbl.boolean('entered_into_cmis')
      })

      .createTable('guests', tbl => {
        tbl.date('engagement_date')
        tbl.increments()
        tbl
        .integer('fam_id')
        .unsigned()
        .references("id")
        .inTable('families')

        tbl.boolean('vet_status')

        // Basic information

        tbl.boolean('blacklisted').defaultTo(false)
        tbl.text('reason_for_being_blacklisted')
        tbl.text('relationship_to_HoH').notNullable()
        tbl.text('first_name').notNullable()
        tbl.text('last_name').notNullable()
        tbl.text('last_4_digits_of_ssn')
        tbl.date('dob')
        tbl.integer('age_at_enrollment').unsigned()

        // Demographics

        tbl.text('race')
        tbl.text('ethnicity')
        tbl.text('gender')

        // School info

        tbl.boolean('in_school')
        tbl.boolean('connected_to_MVento')
        tbl.text('last_grade_completed')
        tbl.text('school_status')

        // Disabilities

        tbl.boolean('alcohol_abuse')
        tbl.boolean('chronic_health_condition')
        tbl.boolean('developmental_disability')
        tbl.boolean('substance_abuse')
        tbl.boolean('HIV_AIDS')
        tbl.boolean('mental_health_problem')
        tbl.boolean('physical_disability')

        // Pregnancy

        tbl.boolean('is_pregnant')
        tbl.date('pregnancy_due_date')

      })
      .createTable('guest_income', tbl => {
        tbl.increments()
        tbl.integer('guest_id').unsigned().references('id').inTable('guests')
        tbl.date('created_at').defaultTo(knex.fn.now())
        tbl.decimal('income_at_entry')
        tbl.decimal('income_at_exit')
        tbl.decimal('income_at_update')
      })
      
      .createTable('notes', tbl => {
        tbl.increments()
        tbl.integer('guest_id')
        .unsigned()
        .references('id')
        .inTable('guests')
        tbl.date('created_at').defaultTo(knex.fn.now())
        tbl.text('title')
        tbl.text('description')
      })
      .createTable("users", function (tbl) {
        tbl.increments();
        tbl.string("first_name", 128).notNullable();
        tbl.string("last_name", 128).notNullable();
        tbl.string("email").notNullable().unique();
        tbl.string("password", 128).notNullable();
        tbl.string("pin").notNullable();
        tbl.boolean('clocked_in').defaultTo(false)
        tbl
        .integer('fam_id')
          .unsigned()
          .references('id')
          .inTable('families')
        tbl.date('clocked_in_at')
        tbl
          .enu("role", ["staff", "admin", "guest", "pending"])
          .notNullable()
          .defaultTo("pending");
      })
    };

  exports.down = function (knex) {
    return knex.schema
      .dropTableIfExists("users")
      .dropTableIfExists("notes")
      .dropTableIfExists("guest_income")
      .dropTableIfExists("guests")
      .dropTableIfExists("families");
  };


