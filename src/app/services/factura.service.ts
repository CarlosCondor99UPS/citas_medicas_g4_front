import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {
  // Se define un servicio con un constructor que inyecta HttpClient.
constructor(private httpClient: HttpClient) {}

// Método para obtener todas las facturas.
public obtenerFacturas() {
  let url = "http://localhost:8068/facturaControlador/obtenerFacturas";
  return this.httpClient.get<any>(url);
}

public crearFacturas(personaId: number, servicioId: number, cantidad: number) {
  const factura = {
    personaId: personaId,
    servicioId: servicioId,
    cantidad: cantidad
  };

  const url = `http://localhost:8068/facturaControlador/crear/${personaId}/${servicioId}/${cantidad}`;
  
  // Cambia el tipo de respuesta esperada a 'text' en lugar de 'json'
  return this.httpClient.post(url, factura, { responseType: 'text' });
  
}
}
