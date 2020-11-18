import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('bolsistas').insert([
        { nome: 'Joaquim Santos', rg: '159758469'},
        { nome: 'Mesquita Quita', rg: '595959598'},
        { nome: 'Levi Atanos', rg: '149993295'},
        { nome: 'Vivo Felix', rg: '315842596'},
    ])
}