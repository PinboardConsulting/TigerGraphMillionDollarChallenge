import { Component, Input, OnInit } from '@angular/core';
import { GetDataService } from 'src/app/services/get-data/get-data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() setHeight:string = '100%';
  constructor(
    private readonly getData: GetDataService
  ) { }
  tableData:any = [];
  async ngOnInit() {
    this.getData.parseData_newSchema(this.getData.data);
      this.getData.getData.subscribe((data:any) =>{
        if(data){
          this.tableData = data;
        }
      });
  }

}
