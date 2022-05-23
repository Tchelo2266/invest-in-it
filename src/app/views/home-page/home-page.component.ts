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
    this.ativosService.getAll().subscribe((ativos: Array<Ativos>)=>{
      this.ativos= ativos;
    });
    // console.log("Ativos", this.ativos);
  }

}
