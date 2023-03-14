import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  public linkTheme = document.querySelector('#theme');

  constructor() {
    // Cargar el tema desde localStorage

    const tema = localStorage.getItem('tema') || './assets/css/colors/default.css';
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
}
