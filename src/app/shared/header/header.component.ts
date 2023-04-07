import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/services/datos/usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent {

  constructor(public usuarioSrv: UsuarioService) { }

  logOut() {
    this.usuarioSrv.logOut();
  }

  getUserFoto() {
    return (this.usuarioSrv.getUserFoto());
  }
 
}
