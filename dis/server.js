"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const users_1 = __importDefault(require("./routes/users"));
const connection_1 = __importDefault(require("./database/connection"));
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor() {
        this.port = process.env.PORT;
        this.app = express();
        //initial configs
        this.connection();
        this.middlewares();
        this.routes();
    }
    connection() {
        connection_1.default();
    }
    middlewares() {
        this.app.use(cors_1.default());
        this.app.use(express.json());
    }
    routes() {
        this.app.use("/default", users_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log("Listening on port " + this.port);
        });
    }
}
exports.default = Server;
