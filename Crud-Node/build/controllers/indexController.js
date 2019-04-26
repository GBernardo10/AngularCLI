"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    index(req, res) {
        res.json({
            text: 'Lista de user /seven/usuarios'
        });
    }
}
exports.indexController = new IndexController();
