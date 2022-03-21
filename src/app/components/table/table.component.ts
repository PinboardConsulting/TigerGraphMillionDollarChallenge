import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() setHeight:string = '100%';
  constructor() { }
  products2:any = [
    {
    category: "Accessories",
    code: "f230fh0g3",
    description: "Product Description",
    id: "1000",
    image: "bamboo-watch.jpg",
    inventoryStatus: "INSTOCK",
    name: "Bamboo Watch",
    price: 65,
    quantity: 24,
    rating: 5,
  },
  {
    category: "Accessories",
code: "nvklal433",
description: "Product Description",
id: "1001",
image: "black-watch.jpg",
inventoryStatus: "INSTOCK",
name: "Black Watch",
price: 72,
quantity: 61,
rating: 4
  },
  ];
  ngOnInit(): void {
  }

}
