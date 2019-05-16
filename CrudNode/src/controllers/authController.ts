import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import pool from '../database';

class LoginController {
    public async getLogin(req: Request, res: Response): Promise<void> {
        const { username } = req.body
        const { password } = req.body;

        await pool.query`select * from users where username = ${username} and password = ${password}`
        const token = jwt.sign({
            username:user.username
        },config)
            // .then(resultado => {
            //     if (resultado.recordset.length > 0) {
            //         return res.json(resultado.recordset);
            //     } else {
            //         res.status(404).json({
            //             text: "Usuario nao encontrado"
            //         })
            //     }
            // })
    }
}

const loginController = new LoginController();
export default loginController;