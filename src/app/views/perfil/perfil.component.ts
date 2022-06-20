import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { UsuarioService } from '../ativos/usuario.service';
import { Usuario } from '../models/usuario.model';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  faUser = faUser;
  public user: Usuario = new Usuario();
  public password: String = '';
  public userForm! : FormGroup;

  constructor(private formBuilder: FormBuilder,
                private userServ: UsuarioService,
                private rota: Router) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      nome: ['', Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(255)
      ])
     ],
      cpf: ['', Validators.required, Validators.minLength(11)],
      email: ['', Validators.compose([
        Validators.required, Validators.email
      ])],
      senha: ['', Validators.compose([
        Validators.required, Validators.minLength(6)
      ])],
      senhaCheck: ['', Validators.compose([
        Validators.required, Validators.minLength(6)
      ])],
      data_nascimento: ['', Validators.compose([
        Validators.required, Validators.minLength(6), Validators.maxLength(10)
      ])]
    });
  }

  public registrar() {
    console.log(this.userForm);

    if (this.userForm.valid && !this.userForm.pending) {
      
    } else {
      console.log('Formulário inválido');
    }
    
    
  }

}
