import { Router } from 'express';
import maquinaController from '../../controllers/controllersProjeto/maquinaController';


class MaquinaRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/:id', maquinaController.list);
        this.router.get('/:id/seven/:id', maquinaController.getMaquinaId);
        // this.router.post('/', usuarioController.create);
        // this.router.put('/:id', usuarioController.update);
        // this.router.delete('/:id', usuarioController.delete);
    }

}

const maquinaRoutes = new MaquinaRoutes();
export default maquinaRoutes.router;