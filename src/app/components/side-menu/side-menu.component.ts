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
    {name : 'Male'},
    {name: 'Female'},
    {name: 'Other'}
  ];
  metricOptions = [
    {
      name: 'Education', 
      items: [
          {name: 'Enrolled in Primary [EP]'},
          {name: 'Enrolled in Primary Grade 1 [EP1]'},
          {name: 'Repeated in Primary Grade 1 [RP1]'},
          {name: 'Enrolled in Primary Grade 2 [EP2]'},
          {name: 'Repeated in Primary Grade 2 [RP2]'},
      ]
  },
  {
      name: 'Crime',
      items: [
          {name: 'Total Homicide [TH]'},
      ]
  },
  ]

  metricInTreeOptions:any =  [
        {
            "label": "Education",
            selectable: false,
            "children": [{
                    "label": "Enrolment",
                    selectable: false,
                    "children": [
                      {"label": "Primary [EEP]"}, 
                      {"label": "Seconday [EES]"}]
                },
                {
                    "label": "Repeaters",
                    selectable: false,
                    "children": [
                      {"label": "Primary [ERP]"}, 
                      {"label": "Seconday [ERS]"}]
                }]
        },
        {
            "label": "Crime",
            selectable: false,
            "children": [
                {"label": "Homicide [CH]"},
            ]
        },
        {
          "label": "WHO",
          selectable: false,
          "children": [
            {label : 'General government expenditure on health as a percentage of total expenditure on health'},
            {label : 'General government expenditure on health as a percentage of total government expenditure'},
          ]
        }
    ];



  genderSelections:any;
  metricSelections:any;
  metricInTreeSelections:any;

  ngOnInit(): void {
  }

}
