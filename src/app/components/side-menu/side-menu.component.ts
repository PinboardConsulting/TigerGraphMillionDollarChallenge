import { Component, OnInit } from '@angular/core';
import { GetDataService } from 'src/app/services/get-data/get-data.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  constructor(
    private readonly getData: GetDataService,
  ) { }
  genderOptions = [
    {name: 'All'},
    {name : 'Male'},
    {name: 'Female'},
  ];

  currencyOptions = [
    {name: 'Local'},
    {name:'USD'},
    {name:'EUR'},
    {name:'CYN'},
  ]

  currencySelection:any;

  metricInTreeOptions:any =  [];



  genderSelections:any;
  metricInTreeSelections:any;

  ngOnInit(): void {
  this.metricInTreeOptions = this.getData.metricList.map((label:String) => ({label}));
  }

  async updateData(){
    await new Promise(r => setTimeout(r , 100));
    this.getData.selectedMetices = this.metricInTreeSelections.map((item:any) => item.label);
    // this.getData.loadData();
  }

}
