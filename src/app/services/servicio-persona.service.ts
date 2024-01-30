import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioPersonaService {


  constructor(private httpClient: HttpClient) { }

  public crearPersona(persona: any){
    return this.httpClient.post("http://localhost:8068/personas/crear",persona);
  }

  public obtenerPersonasMedicos(){
    let url = "http://localhost:8068/personas/getPersonas";
    return this.httpClient.get<any>(url);     
  }

  obtenerPersonasPacientes() {
    let url = 'http://localhost:8068/personas/getPersonas'; 
    return this.httpClient.get<any>(url);
  }


}
