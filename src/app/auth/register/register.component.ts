import { NotificacionesService } from './../../services/notificaciones.service';
import { UsuarioService } from './../../services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import Swal from 'sweetalert2'
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    public usuarioService: UsuarioService,
    private notificacionesService: NotificacionesService
  ) { }

  public regiterForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(6)]],
    email: ['', [Validators.required]],
    password: ['', Validators.required],
    password2: ['', Validators.required],
    terminos: [false, Validators.required],
  })

  ngOnInit(): void {
  }

  crearUsuario() {
    console.log(this.regiterForm.value);
    if (this.regiterForm.invalid) return
    this.usuarioService.crearUsuario(this.regiterForm.value)
      .subscribe(respuesta => {
        console.log(respuesta);
        if (respuesta.error) {
          this.notificacionesService.aviso('error', respuesta.mensaje);
        } else {
          this.notificacionesService.aviso('success', `Usuario creado correctamente`);
        }
      })
  }
}
