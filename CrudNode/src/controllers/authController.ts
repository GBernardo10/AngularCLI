import { Request, Response } from 'express';
import pool from '../database';


class AuthController {

    public async getLogin(req: Request, res: Response): Promise<void> {

        const userId = req.params.userId;
        const username = req.body.username;
        const password = req.body.password;
        const token = userId;

        await pool.query`select * from users where username = ${username} and password = ${password}`.then(resultado => {
            if (resultado.recordset[0]) {
                res.status(200)
            } else {
                res.status(404).json(`"Usuario:" ${username} não foi encotrado`)
            };
            // if (username == req.body.username && password == req.body.password) {
            //     res.send().json(token)
            //     res.json(resultado.recordset[0])
            // } else {
            //     res.status(404).send({
            //         text: "Usuario e/ou senha invalido"
            //     })
            // }
            //console.log(resultado.recordset)
        });
    }
    // public async getLogin(req: Request, res: Response): Promise<void> {

    //     const username = req.body.username;
    //     const password = req.body.password

    //     await pool.query`select * from users where username = ${username} and password = ${password}`.then(resultado => {
    //         console.log(resultado.recordset)
    //         res.json(resultado.recordset[0])
    //     });
    // }
}

const authController = new AuthController();
export default authController;