import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('bolsista_espetaculo', table => {
        table.increments('id').primary();
        table.time('entrada').notNullable();
        table.time('saida').notNullable();
        table.time('horaExtra');
        table.time('horaTotal');
        table.text('descricao');

        table.string('bolsista_id').notNullable();
        table.foreign('bolsista_id').references('id').inTable('bolsistas')

        table.string('espetaculo_id').notNullable();
        table.foreign('espetaculo_id').references('id').inTable('espetaculos')
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('bolsista_espetaculo');
}