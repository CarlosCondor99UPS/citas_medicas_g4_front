import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { CitaComponent } from './pages/cita/cita.component';

const routes: Routes = [
  
  {path: "registrarse", component:  RegisterComponent},
  {path: "login", component:  LoginComponent},
  {path: "Citas", component: CitaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
