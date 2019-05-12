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
class UserController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query `select * from users`.then(resultado => {
                res.json(resultado.recordset);
            });
            // const users = await pool.request().query(`select * from users`).then(resultado => {
            //     res.json(resultado.recordset);
            // })
            // const users = await pool.request().query(`select * from users`)
            //     res.json(users);
        });
    }
    ;
    getUserId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { userId } = req.params;
            yield database_1.default.query `select * from users where userId = ${userId}`.then(resultado => {
                res.json(resultado.recordset);
            });
            // const getUser = await pool.request().query(`select * from users where USERID = ${userId}`)
            //     .then(resultado => {
            //         res.json(resultado.recordset);
            //         res.status(404).json({
            //             text: "Usuario nao encontrado"
            //         });
            //         console.log(resultado.recordset);
            //     })
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { username } = req.body;
            const { password } = req.body;
            const { firstName } = req.body;
            const { lastName } = req.body;
            yield database_1.default.query `insert into [users](username, password,firstName,lastName) values (${username}, ${password},${firstName}, ${lastName})`;
            res.json({
                text: 'Usuario Criado'
            });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { userId } = req.params;
            const { body } = req.body;
            const userUpdate = yield database_1.default.request().query(`update users set ${body} where USERID = ${userId}`)
                .then(resultado => {
                res.json({
                    text: "Usuario atualizado com sucesso"
                });
                // res.json(resultado.recordset);
            });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { userId } = req.params;
            const userDel = yield database_1.default.request().query(`delete from users where USERID = ${userId}`)
                .then(resultado => {
                res.json({
                    text: "Usuario deletado com sucesso"
                });
                // res.json(resultado.recordset);
            });
        });
    }
}
const userController = new UserController();
exports.default = userController;
