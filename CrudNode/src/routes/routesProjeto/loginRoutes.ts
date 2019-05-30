import { Router } from 'express';
import loginController from '../../controllers/controllersProjeto/loginController';


class LoginRoutes {
    public router: Router = Router();

    constructor() {
        this.config();

    }

    config(): void {
        // this.router.get('/:id', loginController.getLogin);
        this.router.post('/', loginController.getLogin);
    }

}

const loginRoutes = new LoginRoutes();
export default loginRoutes.router;