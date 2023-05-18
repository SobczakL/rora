/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('userData').del();
    await knex('userData').insert(
        {
            id: '2922c286-16cd-4d43-ab98-c79f698aeab0',
            username: 'SobczakL',
            password: 'password',
            email: 'SobczakL@rora.com',
            firstName: 'Lucas',
            lastName: 'Sobczak',
            phone: '416-123-1234',
            cardNumber: '1234 1234 1234 1234',
            exDate: '01/23',
            cvc: '123',
            zip: '1A1 A1A'
        }
    )
}