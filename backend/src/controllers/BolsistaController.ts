import { Request, Response } from 'express';
import knex from '../database/connection';

class BolsistaController {
    async index(request: Request, response: Response) {

        const bolsistas = await knex('bolsistas').select('*');

        return response.json(bolsistas)
    }

    async show(request: Request, response: Response) {

    }

    async create(request: Request, response: Response) {

    }

    async update(request: Request, response: Response) {

    }

    async delete(request: Request, response: Response) {

    }

}

export default BolsistaController;