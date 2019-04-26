import { Request, Response } from 'express';
import pool from '../database';

class UserController {
    public index(req: Request, res: Response) {
        pool.query('select * from users');
        res.json('users');
    }
}

const userController = new UserController();
export default userController;