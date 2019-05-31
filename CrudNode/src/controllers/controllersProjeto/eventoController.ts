import { Request, Response } from 'express';
import pool from '../../database';

class EventoController {

    public async getAllEventoById(req: Request, res: Response): Promise<void> {
        const id = req.params.id
        // const teste = "<p>dois</p>"
        await pool.query`select * from evento where fk_idUserSeven = ${id}`.then(resultado => {
            // res.send(teste)
            res.json(resultado.recordset)
            console.log(resultado.recordset[0])
            // res.json(resultado.recordset[0])
        });
    }
    public async getEventoById(req: Request, res: Response): Promise<void> {
        const id = req.params.id
        // const teste = "<p>dois</p>"
        await pool.query`select * from evento, userSeven where id_evento = ${id}`.then(resultado => {
            // res.send(teste)
            return res.json(resultado.recordset[0])
            // console.log(resultado.recordset[0])
            // res.json(resultado.recordset[0])
        });
    }
}

const eventoController = new EventoController();
export default eventoController;