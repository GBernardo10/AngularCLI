import mssql from 'mssql';
import keys from './keys';

const pool = new mssql.ConnectionPool(keys, err => {
    if (err) {
        console.error("Connection failed", err);
        throw err
    } else {
        console.log("Conectado")
    };
})


pool.on('error', err => {
    try {
        pool.connect().then(res => {
            res.connected
        }).catch(err => console.log(err))
    } catch (error) {
    }
})

pool.on('release', () => console.log('pool => conexao retornada'));
pool.on('SIGINT', () =>
    pool.close(err => {
        if (err) return console.log(err);
        console.log('pool => fechado');
        process.exit(0);
    })
);

export default pool;