
//componentes
import { IncrementadorComponent } from './incrementador/incrementador.component';
import { GrafDonutComponent } from './graf-donut/graf-donut.component';

// Módulos
import { NgChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalImagenComponent } from './modal-imagen/modal-imagen.component';

@NgModule({
  declarations: [
    IncrementadorComponent,
    GrafDonutComponent,
    ModalImagenComponent
  ],
  exports: [
    IncrementadorComponent,
    GrafDonutComponent,
    ModalImagenComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgChartsModule
  ]
})
export class ComponentesModule { }
