import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ativos } from '../models/ativos.model'
import { environment } from 'src/environments/environment'
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AtivosService {
  private url: string= environment.api+"ativos";

  constructor(private httpCliente: HttpClient) { }

  public getAll(): Observable<Ativos[]>{
    const url = this.url+"/ativos";
    return this.httpCliente.get<Ativos[]>(url);
  }

  public add(ativo: Ativos): Observable<any>{
    const ativoPost= JSON.stringify(ativo);
    return this.httpCliente.post(this.url, ativoPost, httpOptions);
  }

  public deletar(id: number){
    return this.httpCliente.delete(this.url+id);
  }

  public editar(ativo: Ativos){
    const ativoPut= JSON.stringify(ativo);
    const id= ativo.id;
    return this.httpCliente.put(this.url+id, ativoPut, httpOptions);
  }

  public get(id: number){
    return this.httpCliente.get<Ativos>(this.url+id);
  }

}
