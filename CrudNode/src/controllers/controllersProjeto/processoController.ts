import { Request, Response } from 'express';
import pool from '../../database';

class ProcessoController {

    public async list(req: Request, res: Response) {
        const id = req.params.id;
        await pool.query`select * from processo, maquina, userSeven
        where processo.fk_idsoft = maquina.id_soft and maquina.fk_idusuario = userSeven.id_usuario
        and userSeven.id_usuario =  ${id}`
            .then(resultado => {
                if (resultado.recordset) {
                    res.json(resultado.recordset)
                } else {
                    res.status(404).json({
                        text: "Nenhum chamado encontrado"
                    })
                }
            }).catch(err => res.status(500).send(err))
    };

}

const processoController = new ProcessoController();
export default processoController;