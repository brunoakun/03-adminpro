import { ConfigService } from './../../services/config.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usr-config',
  templateUrl: './usr-config.component.html',
  styleUrls: ['./usr-config.component.css']
})
export class UsrConfigComponent implements OnInit {
  public linkTheme = document.querySelector('#theme');

  constructor(private configService: ConfigService) { }

  ngOnInit(): void {
    this.configService.marcaAcivo();
  }

  cambiaColorTema(tema: string) {
    this.configService.cambiaColorTema(tema);
  }


}
