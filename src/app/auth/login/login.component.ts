import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';
import { NotificacionesService } from 'src/app/services/notificaciones.service';
import { FriendlyTimestampPipe } from 'src/app/pipes/friendly-timestamp.pipe';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private fb: FormBuilder,
    public usuarioSrv: UsuarioService,
    private notificacionesService: NotificacionesService
  ) { }

  public loginForm = this.fb.group({
    username: [localStorage.getItem('username') || '', [Validators.required]],
    password: ['', Validators.required],
    remember: [localStorage.getItem('recordar') === 'true' || false]
  })

  ngOnInit(): void {
  }

  enviar() {
    const frm = this.loginForm;
    this.usuarioSrv.logIn(frm.value)
      .subscribe(respuesta => {
        if (respuesta.error) {
          this.notificacionesService.aviso('error', respuesta.mensaje);
        } else {
          let mensajePiped: string = '';
          if (this.usuarioSrv.userdata.timestamp) {
            mensajePiped = '<br>Tu última conexión fue hace ' + new FriendlyTimestampPipe().transform(this.usuarioSrv.userdata.timestamp!);
          } 
          this.notificacionesService.aviso('info', `Bienvenido ${respuesta.data.userdata.nombre!} ${mensajePiped}`);
          if (frm.get('remember')?.value) {
            localStorage.setItem('username', frm.get('username')!.value!);
            localStorage.setItem('recordar', 'true');
          } else {
            localStorage.removeItem('username');
            localStorage.removeItem('recordar');
          }
          this.router.navigateByUrl('/');
        }
      })
  }

}
