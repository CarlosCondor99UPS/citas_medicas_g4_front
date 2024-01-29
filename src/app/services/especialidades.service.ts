import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadesService {
  
  constructor(private httpClient: HttpClient) { }

  public obtenerEspecialidades(){
    let url = "http://localhost:8003/especialidad/obtenerEspecialidades";
    return this.httpClient.get<any>(url);     
  }
}
