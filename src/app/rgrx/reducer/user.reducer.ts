import { User } from './../model/user.model';
import * as fromUser from './../actions/user.actions';


const user = null;


export function UserReducer( state = user,
                             action: fromUser.Acciones ): User {

   switch ( action.type ) {

    case fromUser.AGREGAR_USER:
         return  {
                   ...action.usuario};

    case fromUser.EDITAR_USER:

        return  {
                  ...action.usuario};

    case fromUser.BORRAR_USER:
        return null;

    default:
        return state;

   }

}


