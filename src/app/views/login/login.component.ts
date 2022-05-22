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
  
  public usuario: Usuario = new Usuario();

  constructor(private usuarioService: UsuarioService, private rota: Router, private rotaAtiva: ActivatedRoute) { }

  ngOnInit(): void {
  }

  public validaLogin(){
    if(this.usuario.usuario){
      this.usuarioService.getByUsuario(this.usuario.usuario).subscribe((respostaUsuario: Usuario[]) => {

        const [usuarioValida] = respostaUsuario;
        if(this.usuario.senha){
          if(this.usuario.senha.toString() === usuarioValida.senha){
            this.rota.navigate(['/home']);
          }else{
            alert("Senha inválida!");
          }
        }else{
          alert("Digite uma senha")
        }
      });
    }
  }

}
