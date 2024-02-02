import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioLoginService } from 'src/app/services/servicio-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public usuario = {
    username: '',
    password: '',
  }

  constructor(private servicioLogin: ServicioLoginService, private router: Router) { }

  form_login() {
    this.servicioLogin.login(this.usuario).subscribe(
      (data: any) => {
        console.log(data);

        // Verificar si el mensaje es "Inicio de sesión exitoso"
        if (data.message === "Inicio de sesión exitoso") {
          // Redirigir al usuario a la página "main"
          this.router.navigate(['/main']);
        }

      }, (error) => {
        console.log(error);
      });
  }
}
