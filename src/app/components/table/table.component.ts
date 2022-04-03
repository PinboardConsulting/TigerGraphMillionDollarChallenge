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
  tableData:any = [
    {
    year: "2007-2008",
    country: "India",
    gender: "Male",
    metric1: 65,
    metric2: 24,
  },
  {
    year: "2007-2008",
    country: "Russia",
    gender: "Female",
    metric1: 72,
    metric2: 61,
  },
  ];
  async ngOnInit() {
    const data = await this.getData.get_2metrics_for_allCountries(
      'General government expenditure on health as a percentage of total expenditure on health',
      'General government expenditure on health as a percentage of total government expenditure',
      2012
    )
    console.log(data);
  }

}
