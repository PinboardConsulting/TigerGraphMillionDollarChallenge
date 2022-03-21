import { Component, Input, OnInit } from '@angular/core';
declare const mapboxgl:any;
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {


@Input() setHeight:string = '85vh';


  constructor() { }

  ngOnInit(): void {
    mapboxgl.accessToken = 'pk.eyJ1IjoibmlraGlsbWplYnkiLCJhIjoiY2wxMG0yNHNjMjloNTNqb2Ewano1aThkdyJ9.1gMfqfEybs42h9D6AOBo0A';
    const map = new mapboxgl.Map({
    container: 'map', 
    style: 'mapbox://styles/mapbox/light-v10',
    center: [0, 15], 
    zoom: 1.5
    });
  }

}
