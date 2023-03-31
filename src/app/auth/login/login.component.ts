import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';
import { NotificacionesService } from 'src/app/services/notificaciones.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private fb: FormBuilder,
    public usuarioService: UsuarioService,
    private notificacionesService: NotificacionesService
  ) { }

  public loginForm = this.fb.group({
    email: [localStorage.getItem('loginEmail') || '', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    remember: [false]
  })

  ngOnInit(): void {
  }

  enviar() {
    const frm = this.loginForm;
    this.usuarioService.logIn(frm.value)
      .subscribe(respuesta => {
        if (respuesta.error) {
          this.notificacionesService.aviso('error', respuesta.mensaje);
        } else {
          this.notificacionesService.aviso('info', `Bienvenido ${respuesta.data.nombre!}`);
          if (frm.get('remember')?.value) {
            localStorage.setItem('loginEmail', frm.get('email')!.value!)
          } else {
            localStorage.removeItem('loginEmail');
          }
          this.router.navigateByUrl('/');
        }
      })
  }

}
