import { ComponentesModule } from './../componentes/componentes.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Módulos
import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { FormsModule } from '@angular/forms';

// Componentes
import { PanelComponent } from './panel/panel.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';
import { UsrConfigComponent } from './usr-config/usr-config.component';


@NgModule({
  declarations: [
    PanelComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent,
    UsrConfigComponent
  ],
  exports: [
    PanelComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent,
    UsrConfigComponent
  ],
  imports: [
    CommonModule,
    RouterModule,     // en pages.component se utiliza el  <router-outlet>
    SharedModule,
    FormsModule,
    ComponentesModule,    
  ]
})
export class PagesModule { }
