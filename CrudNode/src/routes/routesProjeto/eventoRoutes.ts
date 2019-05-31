import { Router } from 'express';
import eventoController from '../../controllers/controllersProjeto/eventoController';


class EventoRoutes {
    public router: Router = Router();

    constructor() {
        this.config();

    }

    config(): void {
        // this.router.get('/:id', loginController.getLogin);
        this.router.get('/', eventoController.getAllEventoById);
    }

}

const loginRoutes = new EventoRoutes();
export default loginRoutes.router;