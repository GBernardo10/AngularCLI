import { Request, Response } from 'express';

class IndexController {
    public index(req: Request, res: Response) {
        res.json({
            text: 'Lista de user /seven/usuarios'
        })
        }
}

export const indexController = new IndexController();