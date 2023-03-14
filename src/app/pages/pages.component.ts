import { ConfigService } from './../services/config.service';
import { Component, OnInit } from '@angular/core';

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
    // Tema guardado o por defecto
    this.configService;
  }

}
