import { Component, Input, OnInit } from '@angular/core';
import { Chart, registerables} from 'chart.js';
import { GetDataService } from 'src/app/services/get-data/get-data.service';
Chart.register(...registerables);

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  
  @Input() setHeight:string = '100%';
  chart:any;
  constructor(
    private readonly getData: GetDataService
  ) { }

  ngOnInit() {
    
    const canvas = <HTMLCanvasElement> document.getElementById('myChart');
    const ctx:any = canvas.getContext('2d');
    this.chart = new Chart(ctx, {
    type: 'scatter', 
    data: {
        datasets: [
          {
          label: 'Metric1 vs Metric2',
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
        }
      ],
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                  title: {
                    display: true,
                    text: 'Metric1'
                  }
            },
            x: {
              type: 'linear',
              position: 'bottom',
              title: {
                display: true,
                text: 'Metric2'
              }
            }
        },
        // plugins : { 
        //   tooltip : { 
        //   enabled: true,
        //   callbacks : {
        //     title: () => 'Metric1 vs Metric2',
        //     label:(tooltipItem:any, data:any) => {
        //       console.log(data, tooltipItem['index']);
        //       return 'test';
        //     }
        //   }}
        // }
      }
    });

    this.getData.getData.subscribe((data:any) =>{
      if(data){
        this.chart.data.datasets[0].data = data;
        this.chart.data.datasets[0].label = '2015';
        this.chart.data.datasets[0].backgroundColor = 'rgb(255, 99, 132)';
        this.chart.options.scales.x.title.text = 'Metric1';
        this.chart.options.scales.y.title.text = 'Metric1';
        this.chart.options.plugins = { tooltip : { 
          enabled: true,
          callbacks : {
            title: (tooltipItem:any) => {
              let title = '';
              tooltipItem.forEach((item:any , i:number) => {
                title+=`${item.raw.country} - ${item.raw.year} \n`;
              });
             return title.slice(0, -1);
            },
            // afterTitle: (tooltipItem:any) => {
            //   return 'Metric1 -- Metric2';
            // },
            label:(tooltipItem:any) => {
              return `X : ${tooltipItem.raw.metric1} , Y : ${tooltipItem.raw.metric2}`;
            }
          }}
        };
        this.chart.update();
      }
    });
  }

}
