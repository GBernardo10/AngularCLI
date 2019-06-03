import { Request, Response } from 'express';
import pool from '../../database';

class EventoController {
    //select * from evento, userSeven, 
    //maquina where evento.fk_iduserseven = userSeven.id_usuario 
    //and userSeven.id_usuario = 315 and evento.id_evento = 50

    public async getAllEventoById(req: Request, res: Response): Promise<void> {
        const id = req.params.id
        // const teste = "<p>dois</p>"
        await pool.query`select * from evento where fk_idUserSeven = ${id}`.then(resultado => {
            // res.send(teste)
            res.json(resultado)
            console.log(resultado.recordset[0])
            // res.json(resultado.recordset[0])
        });
    }
    public async getAllEventoAndMaquinaById(req: Request, res: Response): Promise<void> {
        const id = req.params.id;

        // const teste = "<p>dois</p>"
        await pool.query`select * from evento, userSeven, maquina where
        evento.fk_iduserseven = userSeven.id_usuario and
        maquina.fk_idusuario = userSeven.id_usuario and evento.id_evento = ${id}`.then(resultado => {
            // res.send(teste)
            res.json(resultado)
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
    public async create(req: Request, res: Response): Promise<void> {
        const nomeEvento = req.body.nomeEvento;
        const tipoEvento = req.body.tipoEvento;
        const data = req.body.data;
        const hora = req.body.hora;
        const fk_idUserSeven = req.body.fk_idUserSeven;

        await pool.query`insert into [evento](nomeEvento,tipoEvento,DATA,HORA,fk_idUserSeven) values (${nomeEvento},${tipoEvento},(select convert(date,${data},103)),${hora},${fk_idUserSeven})`.then(
            resultado => {
                res.json({
                    text: 'Evento Cadastrada'
                });
            }
        ).catch(err => res.status(500).send(err))

    }
}

const eventoController = new EventoController();
export default eventoController;