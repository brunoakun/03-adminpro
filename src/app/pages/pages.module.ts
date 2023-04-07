
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Módulos
import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentesModule } from './../componentes/componentes.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

// Componentes
import { PanelComponent } from './panel/panel.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';
import { UsrConfigComponent } from './usr-config/usr-config.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { UsrListaComponent } from './usr-lista/usr-lista.component';
import { UsrPerfilComponent } from './usr-perfil/usr-perfil.component';
import { ArticulosListaComponent } from './articulos/articulos-lista/articulos-lista.component';


@NgModule({
  declarations: [
    PanelComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent,
    UsrConfigComponent,
    PromesasComponent,
    RxjsComponent,
    UsrListaComponent,
    UsrPerfilComponent,
    ArticulosListaComponent
  ],
  exports: [
    PanelComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent,
    UsrConfigComponent,
    PromesasComponent,
    RxjsComponent,
    UsrListaComponent,
    UsrPerfilComponent,
    ArticulosListaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,     // en pages.component se utiliza el  <router-outlet>
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentesModule,
    NgxDatatableModule,
  ]
})
export class PagesModule { }
