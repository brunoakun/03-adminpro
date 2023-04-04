import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent {

  constructor(private usuarioService: UsuarioService) { }

  logOut() {
    this.usuarioService.logOut();
  }

  getUserFoto() {
    return (this.usuarioService.getUserFoto());
  }

  getUserData() {
    // console.log('getUserData()',this.usuarioService.userdata);
    return this.usuarioService.userdata;
  }

}
