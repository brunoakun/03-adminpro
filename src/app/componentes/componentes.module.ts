
//componentes
import { IncrementadorComponent } from './incrementador/incrementador.component';
import { GrafDonutComponent } from './graf-donut/graf-donut.component';

// Módulos
import { NgChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    IncrementadorComponent,
    GrafDonutComponent
  ],
  exports: [
    IncrementadorComponent,
    GrafDonutComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgChartsModule
  ]
})
export class ComponentesModule { }
