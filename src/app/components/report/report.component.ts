import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  
  @Input() setHeight:string = '100%';
  constructor() { }

  ngOnInit(): void {
  }

}
