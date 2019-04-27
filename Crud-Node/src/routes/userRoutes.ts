import { Router } from 'express';
import userController from '../controllers/usersController';


class UserRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', userController.index);
    }
}

const userRoutes = new UserRoutes();
export default userRoutes.router;