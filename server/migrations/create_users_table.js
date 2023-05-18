/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function(knex) {
    return knex.schema.createTable("userData", (table) => {
        table.uuid("id").primary();
        table.string("username").notNullable();
        table.string("password").notNullable();
        table.string("firstName").notNullable();
        table.string("LastName").notNullable();
        table.string("email").notNullable();
        table.string("phone").notNullable();
        table.string("cardNumber").notNullable();
        table.string("exDate").notNullable();
        table.string("cvc").notNullable();
        table.string("zip").notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable("userData");
};
