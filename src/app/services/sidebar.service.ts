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
        { titulo: 'Clientes', url: 'clientes_lista' },
        { titulo: 'Artículos', url: 'articulos_lista' },
        { titulo: 'Stoks', url: 'sotcks_lista' },
      ]
    },
    {
      titulo: 'Gestión',
      icono: 'fa-solid fa-boxes-stacked',
      submenu: [
        { titulo: 'Transcacciones', url: 'transac_lista' },
      ]
    },
    {
      titulo: 'Utilidades',
      icono: 'fa-solid fa-gears',
      submenu: [
        { titulo: 'Usuarios', url: 'usr_lista' },
      ]
    }
  ]
}
