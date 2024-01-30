import { Component } from '@angular/core';
import { CitaService } from 'src/app/services/cita.service';

@Component({
  selector: 'app-listar-citas',
  templateUrl: './listar-citas.component.html',
  styleUrls: ['./listar-citas.component.css']
})
export class ListarCitasComponent {
  medicos: any[] = [];

  constructor(private citasService: CitaService) { }

  ngOnInit(): void {
    this.obtenerTodosLibros();
    console.log(this.medicos)
  }

  async obtenerTodosLibros(){
    this.citasService.obtenerCitas().subscribe((res: any[]) => this.medicos = res , (error: any)=>{
      console.error('Ocurrió un error al obtener los médicos:', error);
    });
    
  }
}
