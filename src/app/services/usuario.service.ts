import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  constructor(private httpClient: HttpClient) { }


  public crearUsuario(usuario: any){
    return this.httpClient.post("http://localhost:8003/usuarios/registrar",usuario);
  }
}
