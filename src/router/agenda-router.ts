import express, { Router } from "express";
import { AgendaController } from "../controller/agenda-controller";


export class AgendaRouter {
    private agendaController!: AgendaController;
    private router: Router;

    constructor() {
        this.agendaController = new AgendaController();
        this.router = express.Router();

        this.router.get('/listar', (req, res) => {
            this.agendaController.listar(req, res);
        })
    }

    get Router(): Router {
        return this.router;
    }

}