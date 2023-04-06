import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';
import { Route, Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  opcionesMenu: any[] = [];
  constructor(
    public srvMenu: SidebarService,
    public usuarioSrv: UsuarioService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.opcionesMenu = this.srvMenu.menu;
    // console.log(this.opcionesMenu)
  }

  logOut() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  }


  getUserFoto() {
    return (this.usuarioSrv.getUserFoto());
  }

}
