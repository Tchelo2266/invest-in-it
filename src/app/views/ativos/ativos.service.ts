import { Injectable } from '@angular/core';
import { Ativos } from '../models/ativos.model'

@Injectable({
  providedIn: 'root'
})
export class AtivosService {

  public ativos: Array<Ativos> = [
    {
      id: 0,
      tag: 'XPCI11',
      preco: 97.80,
      quantidade: 6
    },
    {
      id: 1,
      tag: 'CPTS11',
      preco: 98.10,
      quantidade: 6
    },
    {
      id: 2,
      tag: 'BBPO11',
      preco: 110.40,
      quantidade: 5
    },
    {
      id: 3,
      tag: 'RBVA11',
      preco: 105.30,
      quantidade: 3
    },
    {
      id: 4,
      tag: 'VINO11',
      preco: 50.10,
      quantidade: 1
    }
  ];

  constructor() { }

  public getAll(): Array<Ativos>{
    return this.ativos;
  }

}
