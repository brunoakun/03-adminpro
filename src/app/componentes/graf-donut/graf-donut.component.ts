import { Component, Input } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-graf-donut',
  templateUrl: './graf-donut.component.html',
  styles: [
  ]
})


// El título y los datos lo recibimos de la página
export class GrafDonutComponent {
  @Input() titulo: string = '';
  @Input() doughnutChartData: ChartData<'doughnut'> = {
    datasets: []
  }

  // El típo de gráfico
  public doughnutChartType: ChartType = 'doughnut';

}
