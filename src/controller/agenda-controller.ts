import { AgendaService } from "../service/agenda-service";
import { Request, Response } from "express";

export class AgendaController {

    private agendaService: AgendaService;


    constructor() {
        this.agendaService =  new AgendaService();
    }

    public async criar(req: Request, res: Response) {

        if (Object.keys(req.body).length === 0) {
            res.status(400).json({ message: "O corpo da requisição está vazio"});
            return;
        }

        try {
            await this.agendaService.criar(req.body);
            res.status(201).json({message: 'Item criado com sucesso'});
        } catch (erro: any) {
            res.status(500).json({message: erro.message});
        }
    }

    public async listar(req: Request, res: Response) {
        const agendas = await this.agendaService.listarTudo();
        res.status(200).json(agendas);
    }

}