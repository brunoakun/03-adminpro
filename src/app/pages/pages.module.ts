
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Módulos
import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';

// Componentes
import { PanelComponent } from './panel/panel.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';


@NgModule({
  declarations: [
    PanelComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent
  ],
  exports: [
    PanelComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,     // en pages.component se utiliza el  <router-outlet>
    SharedModule
  ]
})
export class PagesModule { }
