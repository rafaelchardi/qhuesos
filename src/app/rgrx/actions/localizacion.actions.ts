
import { Action } from '@ngrx/store';
import { BackgroundGeolocationResponse } from '@ionic-native/background-geolocation';

export const ESTABLECER_LOCALIZACION = '[LOCALIZACION] Establecer Localizacion';




export class EstablecerLocalizacionAction implements Action {
   readonly type = ESTABLECER_LOCALIZACION;
   constructor(public localizacion: BackgroundGeolocationResponse) {}
}





export type Acciones = EstablecerLocalizacionAction ;
