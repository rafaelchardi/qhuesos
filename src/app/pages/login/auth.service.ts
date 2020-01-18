import { User } from './../../rgrx/model/user.model';
import { Injectable } from '@angular/core';


import { Router } from '@angular/router';

import * as firebase from 'firebase';
import { map } from 'rxjs/operators';

/// import Swal from 'sweetalert2';
import { AngularFireAuth } from '@angular/fire/auth';
import { EditarUserAccion } from '../../rgrx/actions/user.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../rgrx/app.reducers';
import { UtilsService } from '../../lib/utils.service';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private afAuth: AngularFireAuth,
               private router: Router,
               private store: Store<AppState>,
               private utilsService: UtilsService
              /*  private afDB: AngularFirestore  */) {


      this.initAuthListener();

               }


  initAuthListener() {

    this.afAuth.authState.subscribe( (fbUser: firebase.User) => {

      let usuario = null;

      if (fbUser) {
           usuario = new User (fbUser.displayName, fbUser.email, fbUser.uid);
           /* const usuario2  = {
                nombre : fbUser.displayName,
                uid    : fbUser.uid,
                email  : fbUser.email
              }; */
            }
      const accion = new EditarUserAccion( usuario );

      this.store.dispatch( accion );

    });

  }


  crearUsuario( nombre: string, email: string, password: string ) {


    this.afAuth.auth
        .createUserWithEmailAndPassword(email, password)
        .then( resp => {

          // console.log(resp);
          const user: User = {
            uid: resp.user.uid,
            nombre,
            email: resp.user.email
          };
          this.router.navigate(['']);

         /*  this.afDB.doc(`${ user.uid }/usuario`)
              .set( user )
              .then( () => {

                this.router.navigate(['/']);

              }); */


        })
        .catch( error => {
          this.utilsService.muestaAviso(error);
///          Swal('Error en el login', error.message, 'error');
        });


  }


  login( email: string, password: string ) {

    this.afAuth.auth
        .signInWithEmailAndPassword(email, password)
        .then( resp => {

          // console.log(resp);

          this.router.navigate(['']);

        })
        .catch( error => {
          this.utilsService.muestaAviso(error);

          // Swal('Error en el login', error.message, 'error');
        });

  }

  logout() {

    this.router.navigate(['']);
    this.afAuth.auth.signOut();

  }


  isAuth() {
    return this.afAuth.authState
        .pipe(
          map( fbUser => {

            if ( fbUser == null ) {
              this.router.navigate(['/login']);
            }

            return fbUser != null;
          })
        );
  }

}
