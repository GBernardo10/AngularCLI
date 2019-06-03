import { Router } from 'express';
import processoController from '../../controllers/controllersProjeto/processoController';


class ProcessoRoutes {
    public router: Router = Router();

    constructor() {
        this.config();

    }

    config(): void {
        this.router.get('/:id', processoController.list);
    }

}

const processoRoutes = new ProcessoRoutes();
export default processoRoutes.router;