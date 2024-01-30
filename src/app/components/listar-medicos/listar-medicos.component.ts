import { Component } from '@angular/core';
import { MedicoService } from 'src/app/services/medico.service';

@Component({
  selector: 'app-listar-medicos',
  templateUrl: './listar-medicos.component.html',
  styleUrls: ['./listar-medicos.component.css']
})
export class ListarMedicosComponent {
  medicos: any[] = [];

  constructor(private medicoService: MedicoService) { }

  ngOnInit(): void {
    this.obtenerTodosLibros();
  }

  async obtenerTodosLibros(){
    this.medicoService.obtenerMedicos().subscribe((res: any[]) => this.medicos = res , (error: any)=>{
      console.error('Ocurrió un error al obtener los médicos:', error);
    });
    
  }

}
