import { UsuarioService } from './../services/usuario.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

// Proteger rutas donde solo se puede acceder si se está logueado

export class AuthGuard implements CanActivate {

  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    return this.usuarioService.validarToken()
      .pipe(
        tap(logeado => {
          if (!logeado) this.router.navigateByUrl('/login');
        })
      )
  }

}
