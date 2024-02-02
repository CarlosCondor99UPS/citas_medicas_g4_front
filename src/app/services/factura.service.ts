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

// Método para crear una factura con los parámetros proporcionados.
public crearFacturas(personaId: number, servicioId: number, cantidad: number) {
  // Se crea un objeto factura con los parámetros proporcionados.
  const factura = {
    personaId: personaId,
    servicioId: servicioId,
    cantidad: cantidad
  };

  // Se imprime en la consola la ID de la persona (opcional).
  console.log('          ' + personaId);

  // Se imprime en la consola la URL de creación de factura (opcional).
  console.log('http://localhost:8068/facturaControlador/crear');

  // Se construye la URL con los parámetros y se realiza una solicitud POST para crear la factura.
  const url = `http://localhost:8068/facturaControlador/crear/${personaId}/${servicioId}/${cantidad}`;
  return this.httpClient.post(url, factura);
}
}
