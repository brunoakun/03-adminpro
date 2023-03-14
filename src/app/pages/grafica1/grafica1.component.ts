import { Component } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: []
})
export class Grafica1Component {
  colores = ['red', 'orange', 'green'];

  public doughnutChartData1: ChartData<'doughnut'> = {
    labels: ['Ocupado', 'Reservado', 'Libre'],
    datasets: [{
      data: [350, 450, 100],
      backgroundColor: this.colores
    }]

  };

  public doughnutChartData2: ChartData<'doughnut'> = {
    labels: ['Ocupado', 'Reservado', 'Libre'],
    datasets: [{
      data: [150, 45, 89],
      backgroundColor: this.colores
    }]
  };

  public doughnutChartData3: ChartData<'doughnut'> = {
    labels: ['Ocupado', 'Reservado', 'Libre'],
    datasets: [{
      data: [11, 14, 6],
      backgroundColor: this.colores
    }]
  };

  public doughnutChartData4: ChartData<'doughnut'> = {
    labels: ['Ocupado', 'Reservado', 'Libre'],
    datasets: [{
      data: [7, 8, 9],
      backgroundColor: this.colores
    }]
  };

}
