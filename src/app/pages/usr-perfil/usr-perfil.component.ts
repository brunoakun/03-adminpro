import { UsuarioService } from 'src/app/services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificacionesService } from 'src/app/services/notificaciones.service';

@Component({
  selector: 'app-usr-perfil',
  templateUrl: './usr-perfil.component.html'
})
export class UsrPerfilComponent implements OnInit {

  public perfilForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private usuarioSrv: UsuarioService,
    private notificacionesService: NotificacionesService
  ) { }


  ngOnInit(): void {
    this.perfilForm = this.fb.group({
      nombre: [this.usuarioSrv.userdata.nombre, Validators.required],
      email: [this.usuarioSrv.userdata.email, Validators.required],
      password: [''],
      password2: ['']
    })
  }


  enviar() {
    console.log(this.perfilForm.value);
    this.usuarioSrv.actualizaUsr(this.perfilForm.value)
      .subscribe(resp => {
        console.log(resp);
        if (resp.error) {
          this.notificacionesService.aviso('error', resp.mensaje);
        } else {
          this.notificacionesService.aviso('success', `Datos modificados correctamente`);
        }
      })
  }

  enviarPsw() {

  }

} 