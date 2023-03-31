import { ApiResp } from './../interfaces/api-resp';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegistroUsuario } from '../interfaces/registro-usuario';
import { environment } from 'src/environments/environment';
import { Observable, map, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  apiURL: string = environment.apiURL;
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }



  crearUsuario(formData: RegistroUsuario) {
    const path = `${this.apiURL}/register`;
    return this.http.post<ApiResp>(path, formData);
  }


  logIn(formData: any) {
    const headers = new HttpHeaders().append(
      'Content-Type', 'application/x-www-form-urlencoded'
    );
    const body = {};
    const params = new HttpParams()
      .append('email', formData.email)
      .append('password', formData.password);

    return this.http.post<any>(`${this.apiURL}/login`, body, {
      headers: headers,
      params: params,
    })
      .pipe(
        tap(resp => {
          if (resp.data.token) {
            console.log(resp.data.token);
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
        tap(resp => {
          if (resp.data.token) {
            // guardamos el nuevo token
            localStorage.setItem('token', resp.data.token);
          }
        }),
        map(resp => {
          // devolver true solo si la API no devuelve error
          return (!resp.error);
        })
      );
  }

}
