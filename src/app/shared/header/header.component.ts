import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }

  logOut() {
    this.usuarioService.logOut();
  }

  getUserFoto() {
    return (this.usuarioService.getUserFoto());
  }

  getUserData() {
    console.log(this.usuarioService.userdata);
    return this.usuarioService.userdata;
  }

}
