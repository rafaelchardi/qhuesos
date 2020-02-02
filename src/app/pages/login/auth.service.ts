import { User } from './../../rgrx/model/user.model';
import { Injectable } from '@angular/core';


import { Router } from '@angular/router';

import * as firebase from 'firebase';
import { map, take, pluck } from 'rxjs/operators';

/// import Swal from 'sweetalert2';
import { AngularFireAuth } from '@angular/fire/auth';
import { Store } from '@ngrx/store';
import { AppState } from '../../rgrx/app.reducers';

/// acciones

import { EditarUserAccion } from '../../rgrx/actions/user.actions';
import { ActivarLoadingAction, DesactivarLoadingAccion } from '../../rgrx/actions/loading.actions';


import { UtilsService } from '../../lib/utils.service';
import { AngularFirestore } from '@angular/fire/firestore';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  estavalidado: boolean;
  constructor( private afAuth: AngularFireAuth,
               private router: Router,
               private store: Store<AppState>,
               private utilsService: UtilsService,
               private afDB: AngularFirestore
                ) {

                  this.initAuthListener();
                  this.isAuthCargar().pipe(take(1)).subscribe();
               }


  initAuthListener() {

   this.store.select('user').subscribe(
      (resul: User) => {
          if (resul) {
            this.estavalidado = resul.activadoAdmin;
          } else {
            this.estavalidado = false;
          }
    });

  }


  crearUsuario( nombre: string, email: string, password: string ) {


    this.store.dispatch( new EditarUserAccion( null ) );
    this.store.dispatch( new ActivarLoadingAction() );

    this.afAuth.auth
        .createUserWithEmailAndPassword(email, password)
        .then( resp => {

          const user: User = {
            uid: resp.user.uid,
            nombre,
            email: resp.user.email,
            activadoAdmin : false,
          };

          const usuario = new User (nombre, email, resp.user.uid , false);
          this.store.dispatch( new EditarUserAccion( usuario ) );

          this.router.navigate(['aviso-alta']);

        })
        .catch( error => {
          this.utilsService.muestaAviso(error);
        })
        .finally( () => {
          this.store.dispatch( new DesactivarLoadingAccion() );
        });

  }


  login( email: string, password: string ) {
    this.store.dispatch( new EditarUserAccion( null ) );
    this.store.dispatch( new ActivarLoadingAction() );

    this.afAuth.auth
        .signInWithEmailAndPassword(email, password)
        .then( resp => {
            console.log(resp);
            this.isAuth().pipe(take(1)).subscribe( () => {

              this.afDB.doc(`${ resp.user.uid }/usuario`)
              .get().subscribe((user1: any) => {
                    const estavalidado = user1._document.proto.fields.activadoAdmin.booleanValue || false;
                    const usuario = new User (user1._document.proto.fields.nombre.stringValue,
                                    user1._document.proto.fields.email.stringValue,
                                    user1._document.proto.fields.uid.stringValue , true);
                    const accion = new EditarUserAccion( usuario );
                    this.store.dispatch( accion );
                    if (estavalidado) { this.router.navigate(['']); }

                  }
              );
            }
            );


          })
        .catch( error => {
            this.utilsService.muestaAviso(error);
        }).
        finally( () => {
            this.store.dispatch( new DesactivarLoadingAccion() );
        });
  }

  logout() {

    const accion = new EditarUserAccion( null);
    this.router.navigate(['']);
    this.afAuth.auth.signOut();

  }



  isAuth() {
    return this.afAuth.authState
        .pipe(
          map( fbUser => {
            if ( fbUser == null ) {
              this.router.navigate(['/login']);
            } else {
              if (this.estavalidado === true) {
                   return true;
                } else {
                     this.router.navigate(['']);
                 }
            }
            return (fbUser != null) &&  this.estavalidado;
          })
        );
  }

  isAuthCargar() {
    return this.afAuth.authState
        .pipe(
             map(  fbUser => {
               if ( fbUser !== null ) {
                             this.afDB.doc(`${ fbUser.uid }/usuario`).get().
                             subscribe((user1: any) => {
                                 if (user1) {
                                   this.estavalidado = user1._document.proto.fields.activadoAdmin.booleanValue || false;
                                   const usuario = new User (user1._document.proto.fields.nombre.stringValue,
                                    user1._document.proto.fields.email.stringValue,
                                    user1._document.proto.fields.uid.stringValue , this.estavalidado);
                                   const accion = new EditarUserAccion( usuario );
                                   this.store.dispatch( accion );
                                 }
                                 },
                                 (error) => {} );
                                }
            })
        );
  }

 }
