import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioPersonaService } from 'src/app/services/servicio-persona.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  modalSwith:boolean | undefined;

  public persona = {
  
    cedula:'',
    nombre:'',
    apellido:'',
    direccion:'',
    telefono:'',
    correo:'',
    estado: 'activo',
    fechaNacimiento:'',
    sexo:'',
    tipo:'',
  
  }

  public usuario = {

    encargo: '',
    username: '',
    password: '',
    persona:{
      persona_id: '3'
    }

  }

  constructor(private personaServicio: ServicioPersonaService, private usuarioServicio: UsuarioService, private router: Router) { }

  ngOnInit(){}

  openModal(){
    this.modalSwith = true;
  }

  formRegister() {
    this.personaServicio.crearPersona(this.persona).subscribe(
      (response: any) => {
        const personaId = response.persona_id;

        console.log(response.persona);
        console.log(personaId);

        this.usuario.persona.persona_id = personaId;

        this.usuarioServicio.crearUsuario(this.usuario).subscribe(
          (usuarioData) => {
            console.log(usuarioData);
          },
          (error) => {
            console.log('Error al crear usuario:', error);
          }
        );
      },
      (error) => {
        console.log('Error al crear persona:', error);
      }
    );
  }
  
}
