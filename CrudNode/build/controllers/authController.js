"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
//import bcrypt from 'bcryptjs';
// const SECRET_KEY = "secretkey23456";
class AuthController {
    getLogin(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const username = req.body.username;
            console.log(username);
            const password = req.body.password;
            console.log(password);
            //let { teste } = req.body.teste;
            //let { de } = req.body.de;
            yield database_1.default.query `select * from users where username = ${username} and password = ${password}`.then(resultado => {
                console.log(resultado);
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
        });
    }
}
const authController = new AuthController();
exports.default = authController;
