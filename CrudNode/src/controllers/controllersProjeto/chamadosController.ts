import { Request, Response } from 'express';
import pool from '../../database';

class ChamadosController {

    public async list(req: Request, res: Response) {
        const id = req.params.id;

        await pool.query`select * from chamado, maquina, userSeven where 
        chamado.fk_idsoft = maquina.id_soft and maquina.fk_idusuario = userSeven.id_usuario
        and userSeven.id_usuario = ${id}`
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

    public async totalRows(req: Request, res: Response) {
        const id = req.params.id;
        await pool.query`select count(*) as total_de_chamado from chamado, maquina, userSeven where 
        chamado.fk_idsoft = maquina.id_soft and maquina.fk_idusuario = userSeven.id_usuario
        and userSeven.id_usuario = ${id}`
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

    public async create(req: Request, res: Response): Promise<void> {
        const data = req.body.data;
        const hora = req.body.hora;
        const descricao = req.body.descricao;
        const criticidade = req.body.criticidade;
        const onde_ocorreu = req.body.onde_ocorreu;
        const fk_idSoft = req.body.fk_idSoft;

        await pool.query`insert into [chamado](data, hora,descricao,criticidade,onde_ocorreu,fk_idSoft) values 
        ((select convert(date,${data},103)),${hora}, ${descricao},${criticidade}, 
            ${onde_ocorreu},${fk_idSoft})`.then(
            resultado => {
                console.log(resultado.recordset)
                if (resultado.recordsets.length > 0) {
                    res.json({
                        text: 'Chamado Criado'
                    });
                } else {
                    res.json({
                        text: "Chamado ja existe"
                    })
                }
            }
        ).catch(err => res.status(500).send(err))
    }

}

const chamadosController = new ChamadosController();
export default chamadosController;