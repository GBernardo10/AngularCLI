import { Request, Response } from 'express';
import pool from '../../database';

class MaquinaController {

    public async list(req: Request, res: Response) {
        const id = req.params.id;
        await pool.query`select * from maquina join userSeven on maquina.fk_idusuario = ${id} and userSeven.id_usuario = ${id};`.then(resultado => {
            if (resultado.recordset.length > 0) {
                res.json(resultado.recordset);
            } else {
                res.status(404).json({
                    text: "Nenhum usuario encontrado"
                })
            }
        }).catch(err => res.status(500).send(err))
    };

    public async all(req: Request, res: Response) {
        const id = req.params.id;
        await pool.query`select * from maquina`.then(resultado => {
            if (resultado.recordset.length > 0) {
                res.json(resultado.recordset);
            } else {
                res.status(404).json({
                    text: "Nenhum usuario encontrado"
                })
            }
        }).catch(err => res.status(500).send(err))
    };

    public async getMaquinaId(req: Request, res: Response): Promise<void> {
        // const { id } = req.params;
        const id = req.params.id;
        const idSoft = req.params.id
        await pool.query`select * from maquina, userSeven where id_soft = ${id}`.then(resultado => {
            if (resultado.recordset[0]) {
                console.log(resultado.recordset)
                return res.json(resultado.recordset[0]);
            } else {
                res.status(404).json({
                    text: "Usuario nao encontrado"
                })
            }
        }).catch(err => res.status(500).send(err))
    }

    public async create(req: Request, res: Response): Promise<void> {
        const nome_soft = req.body.nome_soft;
        const fk_idusuario = req.body.fk_idusuario;
        const fk_idEvento = req.body.fk_idEvento;
        const { lastName } = req.body;

        await pool.query`insert into [maquina](nome_soft,fk_idusuario,fk_idEvento) values (${nome_soft},${fk_idusuario},${fk_idEvento})`;
        res.json({
            text: 'Maquina Cadastrada'
        });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const { username } = req.body;
        const { password } = req.body;
        const { firstName } = req.body;
        const { lastName } = req.body;

        await pool.query`update [users] set username = ${username}, password = ${password}, firstName = ${firstName}, lastName = ${lastName} where userId = ${id}`
            .then(resultado => {
                res.json({
                    text: "Usuario atualizado com sucesso"
                });
            }).catch(err => res.status(500).send(err))
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const id = req.params.id;
        await pool.request().query(`delete from maquina where FK_IDEVENTO = ${id}`);
        res.json({
            text: "Usuario deletado com sucesso"
        })

    }

}

const maquinaController = new MaquinaController();
export default maquinaController;