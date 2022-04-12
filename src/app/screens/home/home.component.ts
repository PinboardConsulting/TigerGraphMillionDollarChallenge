import { Component, OnInit } from '@angular/core';
import { GetDataService } from 'src/app/services/get-data/get-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
      private readonly getData: GetDataService
  ) { }
  openTabs:any = {0 : false, 1 : false};
  mapOpen:boolean=true;
  height1 = 'calc(50vh - 40px)';
  height2 = 'calc(50vh - 40px)';
  activeView:number = 0;
  checked:boolean = false;
  yearRange: number[] = [2012,2018];
  maxYear = new Date().getFullYear();
  calculationOptions = [
      {name:'Value'},
      {name:'sum'},
      {name:'Mean'},
  ]

  calculationSelection:any = {name: 'value'};

  ngOnInit(): void {
   
}

onYearRangeChange(){
   this.getData.yearRange = this.yearRange;
   this.getData.loadData();
}

toggle(index:number){
    this.openTabs[index] = !this.openTabs[index];
    this.updateTabHeight();
}

async updateTabHeight(){
    if(this.openTabs[0] && this.openTabs[1]){
        this.height1 = 'calc(50vh - 40px)';
        this.height2 = 'calc(50vh - 40px)';
    } else {
        if(this.openTabs[0]){
            this.height1 = '87vh';
            this.height2 = 'calc(50vh - 40px)';
        }

        if(this.openTabs[1]){
            this.height2 = '87vh';
            this.height1 = 'calc(50vh - 40px)';
        }
        
    }
}

setActiveView(index:number){
    this.activeView = index;
}

}
