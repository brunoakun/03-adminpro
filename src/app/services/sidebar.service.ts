import { Injectable } from '@angular/core';

/**
 * Servicio para montar el menú de opciones
 */

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor() { }

  menu: any[] = [
    {
      titulo: 'Dashboard',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Main', url: '/' },
        { titulo: 'Input / Output', url: 'progress' },
        { titulo: 'Gáfico donut', url: 'grafico1' },
      ]
    },{
      titulo: 'Dashboard 22',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Input / Output', url: 'progress' },
        { titulo: 'Gáfico donut', url: 'grafico1' },
      ]
    }
]
}
