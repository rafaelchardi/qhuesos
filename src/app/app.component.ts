import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Store } from '@ngrx/store';
import { AppState } from './rgrx/app.reducers';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from './rgrx/model/user.model';
import { EditarUserAccion } from './rgrx/actions/user.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private store: Store<AppState>,
    private afAuth: AngularFireAuth,
    private afDB: AngularFirestore,
    private router: Router
  ) {
    this.initializeApp();
    //this.router.navigate(['']);
    this.afAuth.authState.subscribe( (fbUser: firebase.User) => {

      this.afDB.doc(`${ fbUser.uid }/usuario`)
             .get().subscribe((user1: any) => {
                   const estavalidado = user1._document.proto.fields.activadoAdmin.booleanValue || false;
                   const usuario = new User (fbUser.displayName, fbUser.email, fbUser.uid , estavalidado);
                   const accion = new EditarUserAccion( usuario );
                   this.store.dispatch( accion );
                 }
             );
  });


  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
