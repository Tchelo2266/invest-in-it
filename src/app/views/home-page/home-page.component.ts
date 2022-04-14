import { Component, OnInit } from '@angular/core';
import { AtivosService } from '../ativos/ativos.service';
import { Ativos } from '../models/ativos.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  title = "Invest In It";
  public ativos: Array<Ativos> = [ ];

  constructor(private ativosService: AtivosService) { }

  ngOnInit(): void {
    this.ativos = this.ativosService.getAll();
    console.log(this.ativos)
  }

}
