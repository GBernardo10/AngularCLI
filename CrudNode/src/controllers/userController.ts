import { Request, Response } from 'express';
import pool from '../database';

class UserController {

    public async list(req: Request, res: Response) {
        await pool.query`select * from users`.then(resultado =>{
            res.json(resultado.recordset);
        })
        // const users = await pool.request().query(`select * from users`).then(resultado => {
        //     res.json(resultado.recordset);
        // })
        // const users = await pool.request().query(`select * from users`)
        //     res.json(users);
    };

    public async getUserId(req: Request, res: Response): Promise<void> {
        const { userId } = req.params;
        await pool.query`select * from users where userId = ${userId}`.then(resultado =>{
            res.json(resultado.recordset);
        })
        // const getUser = await pool.request().query(`select * from users where USERID = ${userId}`)
        //     .then(resultado => {
        //         res.json(resultado.recordset);
        //         res.status(404).json({
        //             text: "Usuario nao encontrado"
        //         });
        //         console.log(resultado.recordset);
        //     })
    }

    public async create(req: Request, res: Response): Promise<void> {
        const { username } = req.body;
        const { password } = req.body;
        const { firstName } = req.body;
        const { lastName } = req.body;

        await pool.query`insert into [users](username, password,firstName,lastName) values (${username}, ${password},${firstName}, ${lastName})`;
        res.json({
            text: 'Usuario Criado'
        });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { userId } = req.params;
        const { body } = req.body;
        const userUpdate = await pool.request().query(`update users set ${body} where USERID = ${userId}`)
            .then(resultado => {
                res.json({
                    text: "Usuario atualizado com sucesso"
                });
                // res.json(resultado.recordset);
            })
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { userId } = req.params;
        const userDel = await pool.request().query(`delete from users where USERID = ${userId}`)
            .then(resultado => {
                res.json({
                    text: "Usuario deletado com sucesso"
                })
                // res.json(resultado.recordset);
            })
    }
}

const userController = new UserController();
export default userController;