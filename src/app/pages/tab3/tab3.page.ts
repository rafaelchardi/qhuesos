import { BackgroundGeolocation,
  BackgroundGeolocationConfig,
  BackgroundGeolocationResponse,
  BackgroundGeolocationEvents } from '@ionic-native/background-geolocation/ngx';

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/auth.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AppState } from 'src/app/rgrx/app.reducers';
import { Store } from '@ngrx/store';
import { User } from 'src/app/rgrx/model/user.model';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { EstablecerLocalizacionAction } from '../../rgrx/actions/localizacion.actions';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})

export class Tab3Page implements OnInit {

  componentes: Observable<Componente[]>;
  user: User;
  encurso = false;
  coordenadas: BackgroundGeolocationResponse;

  constructor(private authService: AuthService,
              private http: HttpClient,
              private store: Store<AppState>,
              private geolocation: Geolocation,
              private backgroundGeolocation: BackgroundGeolocation,
              ) {

                this.store.select('user').subscribe(
                  (resul: User) => {
                     this.user = resul;
                   });
              }

  logout() {
    this.authService.logout();
  }

  ngOnInit() {
    this.componentes = this.getMenuOpts();

    const config: BackgroundGeolocationConfig = {
      desiredAccuracy: 10,
      stationaryRadius: 20,
      distanceFilter: 30,
      debug: true, //  enable this hear sounds for background-geolocation life-cycle.
      stopOnTerminate: false, // enable this to clear background location settings when the app terminates
      notificationsEnabled: false,
};

    this.backgroundGeolocation.configure(config)
        .then(() => {

        this.backgroundGeolocation.on(BackgroundGeolocationEvents.location).subscribe((location: BackgroundGeolocationResponse) => {
         this.coordenadas = location;
         this.store.dispatch( new EstablecerLocalizacionAction( location ) );
        // IMPORTANT:  You must execute the finish method here to inform the native plugin that you're finished,
        // and the background-task may be completed.  You must do this regardless if your operations are successful or not.
        // IF YOU DON'T, ios will CRASH YOUR APP for spending too much time in the background.
         this.backgroundGeolocation.finish(); // FOR IOS ONLY
        });

        });

  }

  getMenuOpts() {
      return this.http.get<Componente[]>('/assets/data/menu.json');
  }

  iniciarecorrido(valor) {
    if (valor === true) {
      this.backgroundGeolocation.start();
    } else {
      this.backgroundGeolocation.stop();
    }
    this.encurso = valor;
  }

}

export interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}
