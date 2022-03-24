import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  openTabs:any = {0 : false, 1 : false};
  mapOpen:boolean=true;
  height1 = 'calc(50vh - 40px)';
  height2 = 'calc(50vh - 40px)';
  activeView:number = 0;
  checked:boolean = false;
  yearRange: number[] = [2001,2006];
  maxYear = new Date().getFullYear();

  ngOnInit(): void {
   
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
