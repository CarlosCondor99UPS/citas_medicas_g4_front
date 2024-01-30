import { Component } from '@angular/core';
import { EspecialidadesService } from 'src/app/services/especialidades.service';

@Component({
  selector: 'app-listar-especialidad',
  templateUrl: './listar-especialidad.component.html',
  styleUrls: ['./listar-especialidad.component.css']
})
export class ListarEspecialidadComponent {
  medicos: any[] = [];

  constructor(private especialidadService: EspecialidadesService) { }

  ngOnInit(): void {
    this.obtenerTodosLibros();
    console.log(this.medicos)
  }

  async obtenerTodosLibros(){
    this.especialidadService.obtenerEspecialidades().subscribe((res: any[]) => this.medicos = res , (error: any)=>{
      console.error('Ocurrió un error al obtener los médicos:', error);
    });
    
  }

}
