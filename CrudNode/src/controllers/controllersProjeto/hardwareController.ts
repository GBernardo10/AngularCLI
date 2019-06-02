import { Request, Response } from 'express';
import pool from '../../database';

class HardwareController {

    public async list(req: Request, res: Response) {
        const id = req.params.id;
        await pool.query`select * from HARDWARE, MAQUINA, userSeven
        where HARDWARE.fk_idsoft=maquina.id_soft and maquina.fk_idusuario = userSeven.id_usuario
        and userSeven.id_usuario = ${id} `.then(resultado => {
            if (resultado.recordset.length > 0) {
                res.json(resultado.recordset);
                console.log(resultado.recordsets)
            } else {
                res.status(404).json({
                    text: "Nenhum registro encontrado"
                })
            }
        })
    };

    public async getUserId(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query`select * from desempenho where idHardware = ${id}`.then(resultado => {
            if (resultado.recordset.length > 0) {
                return res.json(resultado.recordset[0]);
            } else {
                res.status(404).json({
                    text: "Usuario nao encontrado"
                })
            }
        })
    }
}

const hardwareController = new HardwareController();
export default hardwareController;