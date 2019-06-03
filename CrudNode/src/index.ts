import express, { Application, Request, Response, ErrorRequestHandler, NextFunction } from 'express';
import morgan from 'morgan';
import cors from 'cors';

// import userRoutes from './routes/userRoutes';
// import middleware from './middleware';
// import authRoutes from './routes/authRoutes';
// import businessRoutes from './routes/businessRoutes';

import indexRoutes from './routes/indexRoutes';
import loginRoutes from './routes/routesProjeto/loginRoutes';
import usuarioRoutes from './routes/routesProjeto/usuarioRoutes';
import graficoRoutes from './routes/graficoRoutes';
import hardwareRoutes from './routes/routesProjeto/hardwareRoutes';
import maquinaRoutes from './routes/routesProjeto/maquinaRoutes';
import eventoRoutes from './routes/routesProjeto/eventoRoutes';
import chamadoRoutes from './routes/routesProjeto/chamadoRoutes';
import processoRoutes from './routes/routesProjeto/processoRoutes';

class Server {
    public app: Application;
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use((express.json()));
        this.app.use(express.urlencoded({
            extended: false
        }));
        this.app.use((req: Request, res: Response, next) => {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.header(
                'Access-Control-Allow-Headers',
                'Origin, X-Requested-With, Content-Type, Accept'
            );
            res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS')
            next();
        });
    };

    routes(): void {
        this.app.use(indexRoutes);
        this.app.use('/api/login', loginRoutes);
        this.app.use('/api/usuario', usuarioRoutes);
        this.app.use('/api/grafico', graficoRoutes);
        this.app.use('/api/hardware', hardwareRoutes);
        this.app.use('/api/maquina', maquinaRoutes);
        this.app.use('/api/evento', eventoRoutes);
        this.app.use('/api/chamado', chamadoRoutes);
        this.app.use('/api/processo', processoRoutes);

        // this.app.use('/api/business', businessRoutes);
        // this.app.use('/api/user', userRoutes);
        // this.app.use('/api/login', authRoutes);
    }

    // error() {
    //     this.app.use((err:Er, req: Request, res: Response, next: NextFunction) => {
    //         res.status(500).send('Error');
    //     })
    // }


    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log(`Server on port `, this.app.get('port'));
        })
    }

}

const server = new Server();
server.start();