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
const mssql_1 = __importDefault(require("mssql"));
const keys_1 = __importDefault(require("./keys"));
// const pool = new mssql.ConnectionPool(keys, err => {
//     if (err) {
//         console.error("Connection failed", err);
//     } else {
//         console.log("Conectado")
//     };
// })
// const pool = new mssql.ConnectionPool(keys)
//     pool.connect(err =>{
//         if(err){
//             console.log("err", err)
//         }else{
//             console.log("certo")
//         }
//     })
class Banco {
    connect(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const pool = new mssql_1.default.ConnectionPool(keys_1.default);
            const request = new mssql_1.default.Request();
        });
    }
}
// pool.on('release', () => console.log('pool => conexao retornada'));
// process.on('SIGINT', () =>
//     pool.close(err => {
//         if (err) return console.log(err);
//         console.log('pool => fechado');
//         process.exit(0);
//     })
// );
const pool = new Banco();
exports.default = pool;
