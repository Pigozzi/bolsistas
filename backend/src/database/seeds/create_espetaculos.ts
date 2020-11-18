import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('espetaculos').insert([
        { nome: 'Violetas na janela', data: '01/01/2020' },
    ])

}