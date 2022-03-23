import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  constructor() { }
  genderOptions = [
    {name : 'Male'},
    {name: 'Female'},
    {name: 'Other'}
  ];
  genderSelections:any;
  ngOnInit(): void {
  }

}
