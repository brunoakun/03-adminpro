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
        { titulo: 'Promesas', url: 'promesas' },
        { titulo: 'Rxjs', url: 'rxjs' },
      ]
    },
    {
      titulo: 'Maestros',
      icono: 'mdi mdi-table',
      submenu: [
        { titulo: 'Artículos', url: 'articulos_lista' },
        { titulo: 'Stoks', url: 'sotcks_lista' },
      ]
    },
    {
      titulo: 'Usuarios',
      icono: 'mdi mdi-account',
      submenu: [
        { titulo: 'Listado', url: 'usr_lista' },
      ]
    }
  ]
}
