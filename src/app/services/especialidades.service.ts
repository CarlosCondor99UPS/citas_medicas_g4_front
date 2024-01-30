import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadesService {


  constructor(private httpClient: HttpClient) { }

  public obtenerEspecialidades(){
    let url = "http://localhost:8068/especialidad/listar";
    return this.httpClient.get<any>(url);     
  }

  
  public crearEspecialidad(especialidad: any){
    return this.httpClient.post("http://localhost:8068/especialidad/crear",especialidad);
  }



}
