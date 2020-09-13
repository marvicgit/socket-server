import { Usuario } from "./usuario";

export class UsuariosLista {
    private lista: Usuario[] = [];

    constructor() {}

    agregar(usuario: Usuario) {
        this.lista.push(usuario);
        console.log(this.lista);
        return usuario;
        
    }

    actualizarNombre(id: string, nombre: string) {
        for(let usuario of this.lista) {
            if(usuario.id === id) {
                usuario.nombre = nombre;
                break;
            }
        }
        console.log('====actualizando usuario========');
        console.log(this.lista);
        
        
    }

    getLista() {
        return this.lista.filter(usuario => usuario.nombre !== 'sin-nombre');
    }

    getUsuario(id: string) {
        return this.lista.find(usuario => usuario.id === id);
    }

    getUsuariosEnSala(sala: string) {
        return this.lista.find(usuario => usuario.sala === sala);
    }

    borrarUsuario(id: string) {
        const tempUsuario = this.getUsuario(id);
        this.lista = this.lista.filter(usuario => usuario.id !== id);
        console.log(this.lista);
        
        return tempUsuario;
    }

}