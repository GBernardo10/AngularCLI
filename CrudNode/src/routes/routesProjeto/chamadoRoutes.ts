import { Router } from 'express';
import chamadosController from '../../controllers/controllersProjeto/chamadosController';


class ChamadosRoutes {
    public router: Router = Router();

    constructor() {
        this.config();

    }

    config(): void {
        // this.router.get('/:id', loginController.getLogin);
        this.router.get('/:id', chamadosController.list);
        this.router.get('/:id/total/:id', chamadosController.totalRows);
        this.router.post('/', chamadosController.create);
        // this.router.get('/:id/eventobyid/:id', eventoController.getEventoById);
    }

}

const chamadosRoutes = new ChamadosRoutes();
export default chamadosRoutes.router;