import { Router } from 'express';
import hardwareController from '../../controllers/controllersProjeto/hardwareController';


class HardwareRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }
    
    config(): void {
        this.router.get('/:id', hardwareController.list);
        // this.router.get('/:id', hardwareController.getUserId);
    }
}

const hardwareRoutes = new HardwareRoutes();
export default hardwareRoutes.router;