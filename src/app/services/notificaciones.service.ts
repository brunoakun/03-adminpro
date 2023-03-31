// Servicio para mostrar Toastr

import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificacionesService {

  constructor(public toastr: ToastrService) { }

  aviso(tipo: string, payload: any) {
    if (typeof payload === 'object') {
      // más de 1 mensaje
      const claves: string[] = Object.keys(payload);
      const valores: string[] = Object.values(payload);
      for (let i = 0; i < claves.length; i++) {
        this.tost(tipo, valores[i], `${claves[i]}`)
      }
    } else {
      // Solo 1 mensaje
      this.tost(tipo, payload, ``);
    }
  }


  tost(tipo: string, msg: string, titulo: string) {
    switch (tipo) {
      case 'error':
        this.toastr.error(msg, `ERROR ${titulo}`);
        break;
      case 'success':
        this.toastr.success(msg, `${titulo}`);
        break;
      case 'info':
        this.toastr.info(msg, `${titulo}`);
        break;
      case 'warning':
        this.toastr.warning(msg, `${titulo}`);
        break;
    }
  }
} 
