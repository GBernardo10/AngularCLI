//import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import pool from '../database';
//import bcrypt from 'bcryptjs';

// const SECRET_KEY = "secretkey23456";


class AuthController {
    public async getLogin(req: Request, res: Response): Promise<void> {
        
        const username = req.body.username;
        console.log(username)
        const password = req.body.password
        console.log(password)

        //let { teste } = req.body.teste;
        //let { de } = req.body.de;
        await pool.query`select * from users where username = ${username} and password = ${password}`.then(resultado => {
            console.log(resultado)

            // if (error) {
            //     return res.status(500).send("Server error !");
            // }
            // if (resultado.recordset < 0) {
            //     return res.status(404).send('Usuario nao encotrado!');
            // }
            // const result = bcrypt.compareSync(password, password);
            // if (!result) {
            //     return res.status(401).send('Senha invalida');
            // }
            //  const expiresIn = 24 * 60 * 60;
            // const accessToken = jwt.sign({ username: username, password }, SECRET_KEY, {
            //     expiresIn: expiresIn
            // });
            // res.status(200).json({
            //     "users": username, "accessToken": accessToken, "expiresIn": expiresIn
            // });


            // res.status(404).json({
            //     text: "Usuario nao encontrado"
            // })
            // console.log(req.body)
            // console.log(username)
            // console.log(password)
            // res.json(req.body);
        });
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

const authController = new AuthController();
export default authController;