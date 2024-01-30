import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EspecialidadesService } from 'src/app/services/especialidades.service';

@Component({
  selector: 'app-especialidad',
  templateUrl: './especialidad.component.html',
  styleUrls: ['./especialidad.component.css']
})
export class EspecialidadComponent {

  especialidadAqui = {
    especialidad: ''
  }
  constructor(private especialidadService: EspecialidadesService, private router: Router){}

  guardarEspecialidad(){
    this.especialidadService.crearEspecialidad(this.especialidadAqui).subscribe(
      (data) => {
        console.log(data)
      }
    )
  }


}
