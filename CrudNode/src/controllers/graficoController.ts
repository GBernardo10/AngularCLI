import { Request, Response } from 'express';
import pool from '../database';

class GraficoController {

    public async list(req: Request, res: Response) {
        const id = req.params.id;
        await pool.query`select top(1) cpu_disponivel,cpu_em_uso,temperatura_cpu,memoria_ram_disponivel,
        memoria_ram_em_uso_cpu,disco_em_uso_hd,disco_livre_hd,temperatura_gpu,memoria_em_uso_gpu,data_hora from desempenho,maquina,userSeven 
        where desempenho.fk_idSoft=maquina.id_soft and maquina.FK_IDUSUARIO = userSeven.id_usuario and 
        userSeven.id_usuario = ${id} order by id_desempenho desc;`.then(resultado => {
            if (resultado.recordset.length > 0) {
                res.json(resultado);
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
        await pool.query`select * from desempenho where idDesempenho = ${id}`.then(resultado => {
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

const graficoController = new GraficoController();
export default graficoController;