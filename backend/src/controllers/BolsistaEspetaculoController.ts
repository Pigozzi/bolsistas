import { Request, Response } from 'express';
import knex from '../database/connection';

class BolsistaEspetaculo {
    async index(request: Request, response: Response) {

        const bolsistaEspetaculo = await knex('bolsista_espetaculo')
            .join('bolsistas', 'bolsistas.id', '=', 'bolsista_espetaculo.bolsista_id')
            .join('espetaculos', 'espetaculos.id', '=', 'bolsista_espetaculo.espetaculo_id')
            .select([
                'bolsista_espetaculo.*',
                'bolsistas.nome AS bolsista',
                'bolsistas.rg',
                'espetaculos.nome AS espetaculo',
                'espetaculos.data'
            ]);

        return response.json(bolsistaEspetaculo);

    }

    async create(request: Request, response: Response) {
        const { bolsista_id, espetaculo_id, entrada, saida, horaExtra, horaTotal, descricao } = request.body;

        const [id] = await knex('bolsista_espetaculo').insert({
            bolsista_id,
            espetaculo_id,
            entrada,
            saida,
            horaExtra,
            horaTotal,
            descricao
        });

        return response.json({ id })
    }
}

export default BolsistaEspetaculo;