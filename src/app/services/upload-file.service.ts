 import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { NotificacionesService } from './notificaciones.service'; 

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {
  apiURL: string = environment.apiURL;

  constructor(
    private http: HttpClient,
    private router: Router,
    private notificacionesService: NotificacionesService
  ) { }

  async uploadFoto(archivo: File, id: string) {

    try {
      const path = `${this.apiURL}/imgUpload`;
      const formData = new FormData();
      formData.append('imagen', archivo);
      formData.append('id', id);

      const resp = await fetch(path, {
        method: 'post',
        body: formData
      });

      console.log('resp', resp);

      const respAwa = await resp.json();
      console.log(respAwa);
        return respAwa;
    } catch (error) {
      console.log(error);
      return (false);
    }
  }
}
