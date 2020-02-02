import * as fromlocalizacion from './../actions/localizacion.actions';
import { BackgroundGeolocationResponse } from '@ionic-native/background-geolocation';

const localizacion = null;

export function LoadingReducer( state = localizacion,
                                action: fromlocalizacion.Acciones ): BackgroundGeolocationResponse {

     switch ( action.type ) {

          case fromlocalizacion.ESTABLECER_LOCALIZACION:
               return  {
                         ...action.localizacion};
          default:
               return state;
          }
}
