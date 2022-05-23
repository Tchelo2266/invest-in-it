import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import { UsuarioService } from '../ativos/usuario.service';
import { Usuario } from '../models/usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  faUser = faUser;
  faKey = faKey;

  public usuarios: Array<Usuario> = [];

  constructor(private usuarioService: UsuarioService, private rota: Router, private rotaAtiva: ActivatedRoute) { }

  ngOnInit(): void {
    this.usuarioService.getAll().subscribe((usuarios: Array<Usuario>) =>{
      this.usuarios = usuarios;
    })

  }

  public validaLogin(login: string, senha: string){
    let usuario = {"login": login, "senha": senha};
    if(usuario.login){
      this.usuarioService.getByUsuario(usuario.login, usuario.senha).subscribe((respostaUsuario: Usuario) => {
        if(respostaUsuario){
          if(respostaUsuario.senha === usuario.senha){
            this.rota.navigate(['/home']);
          }
        }
      });
      console.log()
    }
  }

}
