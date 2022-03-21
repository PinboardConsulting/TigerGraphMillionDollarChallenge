import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  openTabs:any = {0 : true, 1 : false};
  height = '87vh';
  ngOnInit(): void {
   
}

onTabOpen(event:any){
    this.openTabs[event.index] = true;
    this.updateTabHeight();
}

onTabClose(event:any){
    this.openTabs[event.index] = false;
    this.updateTabHeight();
}

async updateTabHeight(){
    if(this.openTabs[0] && this.openTabs[1]){
        this.height = 'calc(50vh - 40px)';
    } else {
        this.height = '87vh';
    }
};

}
