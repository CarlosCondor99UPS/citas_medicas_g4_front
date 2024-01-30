import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { CrearServicioComponent } from './components/crear-servicio/crear-servicio.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { MedicoComponent } from './components/medico/medico.component';
import { EspecialidadComponent } from './components/especialidad/especialidad.component';
import { ListarMedicosComponent } from './components/listar-medicos/listar-medicos.component';
import { ListarEspecialidadComponent } from './components/listar-especialidad/listar-especialidad.component';
import { CitaComponent } from './components/cita/cita.component';
import { ListarCitasComponent } from './components/listar-citas/listar-citas.component';

const routes: Routes = [
  {path: "", redirectTo:"main", pathMatch:"full"},
  {path: "main", component:  MainComponent},

  {path: "registrarse", component:  RegisterComponent},
  {path: "login", component:  LoginComponent},
  {path: "crearServicio", component:  CrearServicioComponent},
  {path: "listarServicios", component: ServiciosComponent},
  {path: "crearMedico", component: MedicoComponent},
  {path: "crearEspecialidad", component: EspecialidadComponent},
  {path: "listarMedico", component: ListarMedicosComponent},
  {path: "listarEspecialidad", component: ListarEspecialidadComponent},
  {path: "crearCita", component: CitaComponent},
  {path: "listarCita", component: ListarCitasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
