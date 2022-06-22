import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../models/usuario.model';
import { UsuarioService } from './usuario.service';



@Injectable({
    providedIn: 'root'
})
export class AuthUsuarioService {
    private autenticado: boolean = false;

    constructor(private rota: Router, private userServ: UsuarioService) { }

    public logar(usuario: Usuario) {
        console.log("entrou logar")
        this.userServ.checarLogin(usuario).subscribe((resposta:Usuario[])=>{
            const [ usuarioLogin ] = resposta;
            console.log("usuario",usuario)

            if (usuarioLogin) {
              this.setAutenticado(true);
              this.rota.navigate(['/home']);
            } else {
                this.setAutenticado(false);
            }

        }); 
    }

    public criarConta(user: Usuario) {
        this.userServ.add(user).subscribe((userCad: any)=>{
            console.log(userCad);
            this.rota.navigate(['/login']);
        });
    }

    public deslogar() {

    }

    public setAutenticado(valor: boolean) {
        this.autenticado = valor;
    }

    public isAutenticado() {
        return this.autenticado;
    }
}
