import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { Mensaje } from '../interface/mensaje.interface';
import {  AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { User } from 'src/app/rgrx/model/user.model';
import { AppState } from 'src/app/rgrx/app.reducers';


@Injectable()
export class ChatService {

  private itemsCollection: AngularFirestoreCollection<Mensaje>;

  public chats: Mensaje[] = [];
  usuario: User;


  constructor( private afs: AngularFirestore ,
               private store: Store<AppState>
            ) {

             this.store.select('user').subscribe(
                (usuario: User ) => {

                   this.usuario = usuario;
                   console.log('ddd' , this.usuario );
                }
             );
  }



  public cargarMensajes() {
    //this.itemsCollection = this.afs.collection<Mensaje>('chats', ref => ref.orderBy('fecha' , 'desc').limit(5) );
    this.itemsCollection = this.afs.collection<Mensaje>('chats', ref => ref.orderBy('fecha' , 'desc'));
    return this.itemsCollection.valueChanges().pipe(
                                  map( (mensajes: Mensaje[]) => {
                                        console.log( mensajes );

                                        this.chats = [];

                                        for ( const mensaje of mensajes ) {
                                          this.chats.unshift( mensaje );
                                        }

                                        return this.chats;
                                      })
                              );


  }


  agregarMensaje( texto: string ) {

    // TODO falta el UID del usuario
    const mensaje: Mensaje = {
      nombre: this.usuario.nombre, //// this.usuario.nombre,
      mensaje: texto,
      fecha: new Date().getTime(),
      uid: this.usuario.uid
    };

    console.log(mensaje);

    return this.itemsCollection.add( mensaje );

  }

}
