import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  faUser = faUser;

  constructor() { }

  ngOnInit(): void {
  }

}
