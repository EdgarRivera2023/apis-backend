/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  // We use knex.schema to build our tables
  return knex.schema
    // First, create the 'companies' table
    .createTable('companies', function(table) {
      table.increments('id').primary(); // Auto-incrementing primary key 'id'
      table.string('company_name', 255).notNullable();
      table.string('main_email', 255);
      table.string('address_line1', 255);
      table.string('address_line2', 255);
      table.string('city', 100);
      table.string('state', 50);
      table.string('zip_code', 10);
      table.string('account_status', 50).notNullable().defaultTo('active');
      table.string('plan_tier', 50).notNullable().defaultTo('basic');
      table.timestamp('created_at').defaultTo(knex.fn.now());
    })
    // Then, create the 'contacts' table
    .createTable('contacts', function(table) {
      table.increments('id').primary();
      table.integer('company_id').unsigned().notNullable().references('id').inTable('companies').onDelete('CASCADE'); // Foreign Key
      table.string('first_name', 100);
      table.string('last_name', 100);
      table.string('email', 255).unique();
      table.string('phone_primary', 20);
      table.string('phone_secondary', 20);
      table.boolean('is_primary_contact').defaultTo(false);
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.integer('main_contact_for_company_id').unsigned().references('id').inTable('companies').onDelete('SET NULL'); // Link back to companies
    })
    // Finally, create the 'users' table
    .createTable('users', function(table) {
      table.increments('id').primary();
      table.integer('contact_id').unsigned().notNullable().unique().references('id').inTable('contacts').onDelete('CASCADE'); // Foreign Key
      table.string('password_hash', 255).notNullable();
      table.string('role', 50).notNullable().defaultTo('technician');
      table.string('language', 5).notNullable().defaultTo('en');
      table.boolean('is_active').notNullable().defaultTo(true);
      table.timestamp('created_at').defaultTo(knex.fn.now());
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  // To undo the migration, we drop tables in the reverse order of creation
  return knex.schema
    .dropTableIfExists('users')
    .dropTableIfExists('contacts')
    .dropTableIfExists('companies');
};