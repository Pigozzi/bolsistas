import { Request, Response } from 'express';

export default {
    async index(request: Request, response: Response) {
        return response.json("Lista de bolsistas")
    },

    async show(request: Request, response: Response) {

    },

    async create(request: Request, response: Response) {

    },

    async update(request: Request, response: Response) {

    },

    async delete(request: Request, response: Response) {

    }

}