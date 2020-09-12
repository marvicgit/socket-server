import express from 'express';
import { SERVER_PORT } from '../global/environment';
export default class Server {

    app: express.Application;
    port: number;

    constructor() {
        this.app = express();
        this.port = SERVER_PORT
    }

    start(callback: any) {
        this.app.listen(this.port, callback);
    }
}