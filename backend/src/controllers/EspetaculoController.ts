import { Request, Response } from 'express';
import knex from '../database/connection';

class EspetaculoController {
    async index(request: Request, response: Response) {
        const espetaculos = await knex('espetaculos').select('*');

        return response.json(espetaculos);
    }

    async create(request: Request, response: Response) {
        const { nome, data } = request.body;

        const [id] = await knex('espetaculos').insert({
            nome,
            data
        })

        return response.json({ id })
        
    }
}

export default EspetaculoController;