import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
declare const mapboxgl:any;
declare const $:any;
@Component({
  selector: 'app-map',
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({opacity: 0}),
          animate('300ms', style({ opacity: 1}))
        ]),
        transition(':leave', [
          style({opacity: 1}),
          animate('300ms', style({opacity: 0}))
        ])
      ]
    )
  ],
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, OnChanges {


@Input() setHeight:string = '85vh';
@Input() open:boolean = true;

  map:any;
  selectedCountries:any = [];
  showSelection = true; 
  hoverCountry:any = null;
  constructor() { }

  async ngOnChanges(changes:any){
    if(!this.open){
      await new Promise(r => setTimeout(r, 10));
      this.showSelection = false;
    } else {
      await new Promise(r => setTimeout(r, 100));
      this.showSelection = true;
    }
  }
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
    $(window).resize(() => this.map.resize());

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
          this.hoverCountry = e.features[0].properties;
          this.map.setFeatureState(
                  { source: 'country', id: hoveredStateId ,  sourceLayer: 'country_boundaries',},
                  { hover: true }
          );
        }
    });

    this.map.on("mouseleave", 'country-fills', (e:any) => {

      if (hoveredStateId) {
        this.map.setFeatureState(
                { source: 'country', id: hoveredStateId ,  sourceLayer: 'country_boundaries',},
                { hover: false }
        );
        hoveredStateId = null;
        this.hoverCountry = null;
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
