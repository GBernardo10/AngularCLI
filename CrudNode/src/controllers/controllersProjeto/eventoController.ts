import { Request, Response } from 'express';
import pool from '../../database';

class EventoController {

    public async getAllEventoById(req: Request, res: Response): Promise<void> {
        const id = req.params.id;
        // const teste = "<p>dois</p>"
        await pool.query`select * from evento`.then(resultado => {
            // res.send(teste)
            res.json(resultado.recordset)
            console.log(resultado.recordset[0])
            // res.json(resultado.recordset[0])
        });
    }
}

const eventoController = new EventoController();
export default eventoController;