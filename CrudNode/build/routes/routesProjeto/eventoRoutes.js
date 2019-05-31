"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const eventoController_1 = __importDefault(require("../../controllers/controllersProjeto/eventoController"));
class EventoRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        // this.router.get('/:id', loginController.getLogin);
        this.router.get('/', eventoController_1.default.getAllEventoById);
    }
}
const loginRoutes = new EventoRoutes();
exports.default = loginRoutes.router;
