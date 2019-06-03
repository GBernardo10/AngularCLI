import { Router } from 'express';
import eventoController from '../../controllers/controllersProjeto/eventoController';


class EventoRoutes {
    public router: Router = Router();

    constructor() {
        this.config();

    }

    config(): void {
        // this.router.get('/:id', loginController.getLogin);
        this.router.get('/:id', eventoController.getAllEventoById);
        this.router.get('/:id/eventosByMaquinaId/:id', eventoController.getAllEventoAndMaquinaById);
        this.router.post('/', eventoController.create);
        // this.router.get('/:id/eventobyid/:id', eventoController.getEventoById);

    }

}

const loginRoutes = new EventoRoutes();
export default loginRoutes.router;