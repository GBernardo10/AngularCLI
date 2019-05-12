import { Router } from 'express';
import userController from '../controllers/userController';


class UserRoutes {
    public router: Router = Router();

    constructor() {
        this.config();

    }
    
    config(): void {
        this.router.get('/', userController.list);
        this.router.get('/:userId', userController.getUserId);
        this.router.post('/', userController.create);
        this.router.put('/:userId', userController.update);
        this.router.delete('/:userId', userController.delete);
    }

}

const userRoutes = new UserRoutes();
export default userRoutes.router;