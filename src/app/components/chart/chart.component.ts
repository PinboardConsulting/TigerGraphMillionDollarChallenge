import { Component, Input, OnInit } from '@angular/core';
import { Chart, registerables} from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  
  @Input() setHeight:string = '100%';
  chart:any;
  constructor() { }

  ngOnInit(): void {

    const canvas = <HTMLCanvasElement> document.getElementById('myChart');
    const ctx:any = canvas.getContext('2d');
    this.chart = new Chart(ctx, {
    type: 'scatter', 
    data: {
        datasets: [{
          label: 'India',
          data: [{
            x: -10,
            y: 0
          }, {
            x: 0,
            y: 10
          }, {
            x: 10,
            y: 5
          }, {
            x: 0.5,
            y: 5.5
          }],
          backgroundColor: 'rgb(255, 99, 132)'
        }],
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            },
            x: {
              type: 'linear',
              position: 'bottom'
            }
        }
    }
});
  }

}
