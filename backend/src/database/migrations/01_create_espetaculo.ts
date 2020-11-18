import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('espetaculos', table => {
        table.increments('id').primary();
        table.string('nome').notNullable();
        table.date('data').notNullable();
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('espetaculos');
}