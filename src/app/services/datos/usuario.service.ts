import { ModalImagenService } from '../modal-imagen.service';
import { ApiResp } from '../../interfaces/api-resp';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegistroUsuario } from '../../interfaces/registro-usuario';
import { environment } from 'src/environments/environment';
import { Observable, catchError, delay, map, tap, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { Usuario } from '../../models/usuario';
import { NotificacionesService } from '../notificaciones.service';

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {

  apiURL: string = environment.apiURL;
  userdata: Usuario = {}

  constructor(
    private http: HttpClient,
    private router: Router,
    private notificacionesSrv: NotificacionesService,
    private modalImagenSrv: ModalImagenService
  ) { }

  ////////// AUTH  /////////

  logIn(formData: any) {
    const headers = new HttpHeaders().append(
      'Content-Type', 'application/x-www-form-urlencoded'
    );
    const body = {};
    const params = new HttpParams()
      .append('username', formData.username)
      .append('password', formData.password);

    return this.http.post<any>(`${this.apiURL}/login`, body, {
      headers: headers,
      params: params,
    })
      .pipe(
        catchError(error => {
          console.log('Error al intentar autenticar:', error);
          this.notificacionesSrv.aviso('error', 'Error al intentar autenticar, el servidor no está respondiendo. Por favor, intenta de nuevo más tarde.');
          return throwError(() => new Error(error));
        }),
        tap(resp => {
          if (resp.data.token) {
            console.log('estoy en logIn()', resp.data);
            this.userdata = resp.data.userdata;
            localStorage.setItem('token', resp.data.token);
          }
        })
      );
  }


  logOut() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  }



  validarToken(): Observable<boolean> {
    const token = localStorage.getItem('token') || '';
    const cabeceras = new HttpHeaders().append(
      'Authorization', 'Bearer ' + token
    );
    return this.http.get<any>(`${this.apiURL}/refreshToken`, {
      headers: cabeceras
    })
      .pipe(
        catchError(error => {
          console.log('Error al intentar acceder al srvidor:', error);
          this.notificacionesSrv.aviso('error', `El servidor ${this.apiURL} no está respondiendo. Por favor, intenta de nuevo más tarde.`);
          this.logOut();
          return throwError(() => new Error(error));
        }),
        tap(resp => {
          if (resp.data.token) {
            // guardamos el nuevo token y cargamos los valores del usuario
            localStorage.setItem('token', resp.data.token);
            this.userdata = resp.data.userdata;
          }
        }),
        map(resp => {
          // devolver true solo si la API no devuelve error
          return (!resp.error);
        })
      );
  }

  crearUsuario(formData: RegistroUsuario) {
    const path = `${this.apiURL}/register`;
    return this.http.post<ApiResp>(path, formData);
  }


  //////  CRUD  ///////



  getUserFoto() {
    // Devuleve la foto del usuario
    var foto = this.userdata.foto;
    if (foto) {
      foto = `${environment.fotoDir}/${foto}`;
    } else {
      foto = `${environment.fotoDir}/_noUsr.png`;
    }
    return (foto);
  }


  getLista() {
    // Devulve la lista de usuarios
    const path = `${this.apiURL}/usrList`;
    const lista = this.http.get<ApiResp>(path)
      .pipe(
        // delay(10)
      );
    return lista;
  }

  actualizaUsr(usuario: Usuario) {
    const token = localStorage.getItem('token') || '';
    const cabeceras = new HttpHeaders().append('Authorization', 'Bearer ' + token);

    const path = `${this.apiURL}/userUpdate/${this.userdata.id}`;
    return this.http.post<ApiResp>(path, usuario, { headers: cabeceras })
      .pipe(
        catchError(error => {
          this.errorAuth();
          return throwError(() => new Error(error));
        })
      )
  }

  deleteUsr(id: number) {
    const token = localStorage.getItem('token') || '';
    const cabeceras = new HttpHeaders().append('Authorization', 'Bearer ' + token);

    const path = `${this.apiURL}/userDelete/${id}`;
    return this.http.get<ApiResp>(path, { headers: cabeceras })
      .pipe(
        catchError(error => {
          this.errorAuth();
          return throwError(() => new Error(error));
        })
      )
  }


  deleteUsrFoto(usuario: Usuario) {
    const token = localStorage.getItem('token') || '';
    const cabeceras = new HttpHeaders().append('Authorization', 'Bearer ' + token);

    const path = `${this.apiURL}/userDeleteFoto/${usuario.id}`;
    return this.http.get<ApiResp>(path, { headers: cabeceras })
      .pipe(
        catchError(error => {
          this.errorAuth();
          return throwError(() => new Error(error));
        })
      )
  }


  ///// AUX ////

  errorAuth() {
    this.logOut();
    this.modalImagenSrv.cerrarModal();
    this.notificacionesSrv.aviso('error', environment.apiErrorAuth);
  }

}
