import express from 'express';
import { SERVER_PORT } from '../global/environment';
import socketIO from "socket.io";
import http from "http";
import * as socket from '../sockets/socket';


export default class Server {

    static _instance: Server;
    app: express.Application;
    port: number;
    io: socketIO.Server;
    httpServer: http.Server;

    private constructor() {
        this.app = express();
        this.port = SERVER_PORT
        this.httpServer = new http.Server(this.app);
        this.io = socketIO(this.httpServer);
        this.escucharSockets();
    }

    static get instance() {
        return this._instance || (this._instance = new this())
    }

    private escucharSockets() {
        //console.log('escuchando conexciones - sockets');
        this.io.on('connection', cliente => {
            
            socket.conectarCliente(cliente, this.io);

            socket.configurarUsuario(cliente, this.io);

            socket.mensaje(cliente, this.io);
            //desconectar
            socket.desconectar(cliente, this.io);

            socket.obtenerUsuarios(cliente, this.io);
            
        });

    
    }

    start(callback: any) {
        this.httpServer.listen(this.port, callback);
    }
}