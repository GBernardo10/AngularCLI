"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usersController_1 = __importDefault(require("../controllers/usersController"));
class UserRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', usersController_1.default.index);
    }
}
const userRoutes = new UserRoutes();
exports.default = userRoutes.router;
