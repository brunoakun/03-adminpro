import { ConfigService } from './../services/config.service';
import { Component, OnInit } from '@angular/core';

declare function inicializarCustomJs(): void;

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {
  ano: number = new Date().getFullYear();

  constructor(public configService: ConfigService) { }

  ngOnInit(): void {
    // inicializar los plugIn's y demás js del tema
    inicializarCustomJs();

    // Tema guardado o por defecto
    this.configService;
  }

}
