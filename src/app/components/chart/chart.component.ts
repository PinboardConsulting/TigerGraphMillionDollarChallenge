import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Chart, registerables} from 'chart.js';
import { GetDataService } from 'src/app/services/get-data/get-data.service';
Chart.register(...registerables);

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit, OnDestroy {
  
  @Input() setHeight:string = '100%';
  chart:any;
  subscription1:any;
  constructor(
    private readonly getData: GetDataService
  ) { }

  ngOnDestroy(){
    this.subscription1?.unsubscribe();
  }
  ngOnInit() {
    
    const canvas = <HTMLCanvasElement> document.getElementById('myChart');
    const ctx:any = canvas.getContext('2d');
    this.chart = new Chart(ctx, {
    type: 'scatter', 
    data: {
        datasets: [
          {
          label: 'Metric1 vs Metric2',
          data: [],
          backgroundColor: 'rgb(255, 99, 132)'
        }
      ],
    },
    options: {
        scales: {
            y: {
                beginAtZero: false,
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
      }
    });

    this.subscription1 =this.getData.getData.subscribe((data:any) =>{
      if(data){
        const yearData:any = {};
        data.tableData.forEach((item:any) => {
          if(!yearData[item.year]){
            yearData[item.year] = [];
          }
          if(item[this.getData.selectedMetices[0]] && item[this.getData.selectedMetices[1]]){
            yearData[item.year].push(item);
          }
        });
        const datasets:any = [];
        Object.keys(yearData).forEach((year:any) => {
          const data:any = yearData[year];
          const dataset:any = {
            label: year,
            data: data,
            backgroundColor: this.randomRGB(),
            parsing : {
              xAxisKey: this.getData.selectedMetices[0],
              yAxisKey: this.getData.selectedMetices[1],
             
          }
          };
          
          datasets.push(dataset);

        });
        this.chart.data.datasets = datasets;
        this.chart.options.scales.x.title.text = this.getData.selectedMetices[0];
        this.chart.options.scales.y.title.text = this.getData.selectedMetices[1];
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
            label:(tooltipItem:any) => {
              return `X : ${tooltipItem.raw[this.getData.selectedMetices[0]]} , Y : ${tooltipItem.raw[this.getData.selectedMetices[1]]}`;
            }
          }}
        };
        this.chart.update();
      }
    });
  }

  randomNum = () => Math.floor(Math.random() * (235 - 52 + 1) + 52);

  randomRGB = () => `rgb(${this.randomNum()}, ${this.randomNum()}, ${this.randomNum()})`;

}
