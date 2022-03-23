import { Component, Input, OnInit } from '@angular/core';
declare const mapboxgl:any;
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {


@Input() setHeight:string = '85vh';

  map:any;
  selectedCountries:any = [];
  constructor() { }

  ngOnInit(): void {
    mapboxgl.accessToken = 'pk.eyJ1IjoibmlraGlsbWplYnkiLCJhIjoiY2wxMG0yNHNjMjloNTNqb2Ewano1aThkdyJ9.1gMfqfEybs42h9D6AOBo0A';
    this.map = new mapboxgl.Map({
      container: 'map', 
      style: 'mapbox://styles/mapbox/light-v10',
      center: [0, 15], 
      zoom: 1.5,
      preserveDrawingBuffer: true,
      attributionControl: false
    });
    let hoveredStateId:any = null;
    this.map.on('load', () => {
      this.map.addSource("country", {
        type: 'vector',
        url: 'mapbox://mapbox.country-boundaries-v1',
      });

      this.map.addLayer({
        "id": "country-fills",
        'source-layer': 'country_boundaries',
        "type": "fill",
        "source": "country",
        "layout": {},
        'paint': {
          'fill-color': '#627BC1',
          'fill-outline-color': 'black',
          'fill-opacity': [
            'case',
            ['boolean', ['feature-state', 'selected'], false],
            0.5,
            0
        ]
        },
    });
    

    this.map.addLayer({
      "id": "country-boundary",
      'source-layer': 'country_boundaries',
      "type": "line",
      "source": "country",
      "layout": {},
      'paint': {
        'line-color': '#627BC1',
        'line-width': 1,
        'line-opacity': [
            'case',
            ['boolean', ['feature-state', 'hover'], false],
            1,
            0
        ]
      },
  });
    
      this.map.on("mousemove", 'country-fills', (e:any) => {

        if (e.features.length > 0) {
          if (hoveredStateId !== null) {
            this.map.setFeatureState(
                  { source: 'country', id: hoveredStateId ,  sourceLayer: 'country_boundaries',},
                  { hover: false }
              );
          }
          hoveredStateId = e.features[0].id;
          this.map.setFeatureState(
                  { source: 'country', id: hoveredStateId ,  sourceLayer: 'country_boundaries',},
                  { hover: true }
          );
        }
    });

  
    this.map.on("click", (e:any) => {
        const features = this.map.queryRenderedFeatures(e.point, { layers: ["country-fills"] });
        if (features.length) {
           if(this.selectedCountries.find((x:any) => x.id === features[0].id)){
            this.selectedCountries = this.selectedCountries.filter((x:any) => x.id !== features[0].id);
            this.map.setFeatureState(
              { source: 'country', id: features[0].id ,  sourceLayer: 'country_boundaries'},
              { selected : false }
          );
           } else {
            this.selectedCountries.push({ id :features[0].id ,...features[0].properties});
            this.map.setFeatureState(
              { source: 'country', id: features[0].id ,  sourceLayer: 'country_boundaries'},
              { selected : true }
          );
           }
        }
        
 
    });

    });
  }
}
