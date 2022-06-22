import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario.model'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private url: string = "http://localhost:3000";

  constructor(private httpCliente: HttpClient) { }

  public getAll(): Observable<Usuario[]>{
    const url = this.url+"/usuario";
    return this.httpCliente.get<Usuario[]>(url);
  }

  public add(usuario: Usuario): Observable<any>{
    const usuarioPost= JSON.stringify(usuario);
    return this.httpCliente.post(this.url, usuarioPost, httpOptions);
  }

  public deletar(id: number){
    return this.httpCliente.delete(this.url+id);
  }

  public editar(usuario: Usuario){
    const usuarioPut= JSON.stringify(usuario);
    const id= usuario.id;
    return this.httpCliente.put(this.url+id, usuarioPut, httpOptions);
  }

  public get(id: number){
    return this.httpCliente.get<Usuario>(this.url+id);
  }

  public getByUsuario(usuario: string){
    const url = this.url+'/usuario?usuario='+usuario;
    console.log(url);
    return this.httpCliente.get<Usuario[]>(url);
  }

  public checarLogin(user: Usuario): Observable<Usuario[]> {
    console.log(this.url.substring(0, this.url.length))
    const url = this.url.substring(0, this.url.length);
    return this.httpCliente.get<Usuario[]>(url
      +'/usuario?usuario='+user.usuario+'&senha='+user.senha);
  }

}
