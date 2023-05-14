/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

// To limit amount of calls to api, the below data is written into the table
exports.up = function(knex){
    return knex.schema.createTable('userSavedRoutes', (table) => {
        table.uuid('id').primary();
        table.string('username').notNullable();
        table.string('routeId').notNullable();
        table.string('routeNumber').notNullable();
        table.string('routeHeading').notNullable();
        table.string('routeName').notNullable();
        table.string('routeType').notNullable();
    })
}

exports.down = function(knex){
    return knex.schema.dropTable('userSavedRoutes');
}