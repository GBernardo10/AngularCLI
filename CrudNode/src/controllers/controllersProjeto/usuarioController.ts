import { Request, Response } from 'express';
import pool from '../../database';
import { rows } from 'mssql';

class UsuarioController {

    public async list(req: Request, res: Response) {
        await pool.query`select * from userSeven`.then(resultado => {
            if (resultado.recordset.length > 0) {
                res.json(resultado.recordset)
            } else {
                res.status(404).json({
                    text: "Nenhum usuario encontrado"
                })
            }
        }).catch(err => res.status(500).send(err))
    };

    public async getUserId(req: Request, res: Response): Promise<void> {
        // const { id } = req.params;
        const id = req.params.id;
        await pool.query`select * from userSeven where id_usuario = ${id}`.then(resultado => {
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
        // const nome = req.body.nome;
        // const usuario = req.body.usuario;
        // const email = req.body.email;
        // const senha = req.body.senha;

        const { nome } = req.body;
        const { usuario } = req.body;
        const { email } = req.body;
        const { senha } = req.body;

        await pool.query`insert into [userSeven](nome, usuario,email,senha) values (${nome}, ${usuario},${email}, ${senha})`.then(
            resultado => {
                console.log(resultado.recordset)
                if (resultado.recordsets.length > 0) {
                    res.json({
                        text: 'Usuario Criado'
                    });
                } else {
                    res.json({
                        text: "Usuario ja existe"
                    })
                }
            }
        ).catch(err => res.status(500).send(err))

        //.then(
        //     rows => {
        //         if(rows.recordset.columns){
        //             console.log(rows.rowsAffected)
        //         }
        //     }
        // )
        // res.json({
        //     text: 'Usuario Criado'
        // });

    }


    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const { username } = req.body;
        const { password } = req.body;
        const { firstName } = req.body;
        const { lastName } = req.body;

        await pool.query`update [userSeven] set username = ${username}, password = ${password}, firstName = ${firstName}, lastName = ${lastName} where userId = ${id}`
            .then(resultado => {
                res.json({
                    text: "Usuario atualizado com sucesso"
                });
            }).catch(err => res.status(500).send(err))
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.request().query(`delete from users where userId = ${id}`);
        res.json({
            text: "Usuario deletado com sucesso"
        })

    }

}

const usuarioController = new UsuarioController();
export default usuarioController;