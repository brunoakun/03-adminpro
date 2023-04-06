import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

/**
 * Servicio para recuperar la configuración de usuario
 */

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  public linkTheme = document.querySelector('#theme');
  public icoMenu = document.getElementsByClassName('ti-menu');

  constructor() {
    // Cargar el tema desde localStorage

    const tema = localStorage.getItem('tema') || `./assets/css/colors/${environment.defaultTema}`;
    this.linkTheme?.setAttribute('href', tema);
  }


  cambiaColorTema(tema: string) {
    const url = `./assets/css/colors/${tema}.css`;
    this.linkTheme?.setAttribute('href', url);
    localStorage.setItem('tema', url);
    this.marcaAcivo();
  }

  marcaAcivo(): void {
    // Le pone la clase 'working' al activo
    const links = document.querySelectorAll('.selector');
    links.forEach(elemento => {
      elemento.classList.remove('working');
      const opcion = elemento.getAttribute('data-theme')!;
      const opcionUrl: string = `./assets/css/colors/${opcion}.css`;
      if (opcionUrl === this.linkTheme?.getAttribute('href')) elemento.classList.add('working');
    })
  }


  menuExtendido(extend: boolean) {
    if (extend) localStorage.setItem('menuExtendido', 'true');
    if (!extend) localStorage.removeItem('menuExtendido');
  }

} 

