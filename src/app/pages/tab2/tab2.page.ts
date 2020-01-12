import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {


  personajes: any[] = [
  {
    nombre : 'Cesar',
    apellidos : 'Estevens Soler',
    img : '/assets/ces.png',
 },
 {
  nombre : 'Jaime',
  apellidos : 'Chardi Torrent',
  img : '/assets/jct.png',
},
{
  nombre : 'Segio',
  apellidos : 'Benaches Chardi',
  img : '/assets/sbc.png',
},
{
  nombre : 'Pedro',
  apellidos : 'la Higuera',
  img : '/assets/plh.png',
},
{
  nombre : 'Rafael',
  apellidos : 'Chardi Torrent',
  img : '/assets/rct.png',
},

  ];

  slideOpts = {
    slidesPerView : 1.5,
    freeMode : true,
    initialSlide: 1,
    speed: 400
  };


  constructor() {}

}
