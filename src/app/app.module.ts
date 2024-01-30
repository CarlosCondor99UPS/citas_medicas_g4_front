import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { AboutComponent } from './components/about/about.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { CrearServicioComponent } from './components/crear-servicio/crear-servicio.component';
import { HttpClientModule } from '@angular/common/http';
import { CitaComponent } from './components/cita/cita.component';
import { MedicoComponent } from './components/medico/medico.component';
import { EspecialidadComponent } from './components/especialidad/especialidad.component';
import { ListarMedicosComponent } from './components/listar-medicos/listar-medicos.component';
import { ListarEspecialidadComponent } from './components/listar-especialidad/listar-especialidad.component';
import { ListarCitasComponent } from './components/listar-citas/listar-citas.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    NavbarComponent,
    LoginComponent,
    MainComponent,
    AboutComponent,
    ServiciosComponent,
    CrearServicioComponent,
    CitaComponent,
    MedicoComponent,
    EspecialidadComponent,
    ListarMedicosComponent,
    ListarEspecialidadComponent,
    ListarCitasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
