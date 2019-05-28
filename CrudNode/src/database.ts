import mssql from 'mssql';
import keys from './keys';

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
    public async connect(req: Request, res: Response): Promise<void> {
        const pool = new mssql.ConnectionPool(keys)
        const request = new mssql.Request()
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
export default pool;
