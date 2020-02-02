import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AppState } from '../../rgrx/app.reducers';
import { Store } from '@ngrx/store';
import { BackgroundGeolocationResponse } from '@ionic-native/background-geolocation';

declare var mapboxgl: any;

// tslint:disable-next-line: class-name
interface opcionesvista1 {
  nombre: string;
  opcion: string;
}

@Component({
  selector: 'app-mirecorrido',
  templateUrl: './mirecorrido.page.html',
  styleUrls: ['./mirecorrido.page.scss'],
})



export class MirecorridoPage implements OnInit , AfterViewInit {

  map: any;
  lat = -1 ;
  log = -1 ;

  opcionesvista: opcionesvista1[]
                = [{ nombre: 'light' , opcion : 'light-v10'},
                   { nombre: 'dark' , opcion : 'dark-v10'},
                   { nombre: 'outdoors' , opcion : 'outdoors-v11'},
                   { nombre: 'satellite' , opcion : 'satellite-v9'}
                   ];


 constructor(  private store: Store<AppState>) {

    this.store.select('localizacion').subscribe(
      (resul: BackgroundGeolocationResponse) => {
          if (resul) {
            this.log = resul.longitude;
            this.lat = resul.latitude;
            const marker = new mapboxgl.Marker({
            })
            .setLngLat([this.log, this.lat])
            .addTo(this.map);
          }
    });

  }

  ngOnInit() {


  }
  cambiovista(cambiovista) {

   this.map.setStyle('mapbox://styles/mapbox/' + cambiovista.opcion );
  }
  ngAfterViewInit() {

    mapboxgl.accessToken = 'pk.eyJ1IjoicmFmYWVsY2hhcmRpIiwiYSI6ImNrNHp6bXMxNTBmZGwzbG01MzM4aDBzN2sifQ.IfJYZ8mkoQQpX45luGKzXA';

    this.map = new mapboxgl.Map({
      style: 'mapbox://styles/mapbox/light-v10',
      center: [this.log, this.lat],
      zoom: 15.5,
      pitch: 45,
      bearing: -17.6,
      container: 'map',
      antialias: true,

      });
    this.map.addControl(new mapboxgl.NavigationControl());
    // tslint:disable-next-line: only-arrow-functions
    this.map.on('load', () => {
        // Insert the layer beneath any symbol layer.
    this.map.resize();


    const marker = new mapboxgl.Marker({
          })
          .setLngLat([this.log, this.lat])
          .addTo(this.map);



    const layers = this.map.getStyle().layers;

    let labelLayerId;
         // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < layers.length; i++) {
     if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
          labelLayerId = layers[i].id;
          break;
        }
        }


    this.map.addLayer(
        {
          id: '3d-buildings',
          source: 'composite',
        'source-layer': 'building',
        filter: ['==', 'extrude', 'true'],
        type: 'fill-extrusion',
        minzoom: 15,
        paint: {
            'fill-extrusion-color': '#aaa',
            // use an 'interpolate' expression to add a smooth transition effect to the
            // buildings as the user zooms in
            'fill-extrusion-height': [
            'interpolate',
            ['linear'],
            ['zoom'],
            15,
            0,
            15.05,
            ['get', 'height']
            ],
            'fill-extrusion-base': [
            'interpolate',
            ['linear'],
            ['zoom'],
            15,
            0,
            15.05,
            ['get', 'min_height']
            ],
            'fill-extrusion-opacity': 0.6
            }
        },
        labelLayerId
        );
        });




  }


}
