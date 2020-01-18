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

/*
    case fromTodo.TOGGLE_ALL_TODO:
        return state.map( todoEdit => {

            return {
                ...todoEdit,
                completado: action.completado
            };

        });

    case fromTodo.TOGGLE_TODO:

    return state.map( todoEdit => {

        if ( todoEdit.id === action.id ) {
            return {
                ...todoEdit,
                completado: !todoEdit.completado
            };
        } else {
            return todoEdit;
        }

    });

    case fromTodo.EDITAR_TODO:
        return state.map( todoEdit => {

            if ( todoEdit.id === action.id ) {
                return {
                    ...todoEdit,
                    texto: action.texto
                };
            } else {
                return todoEdit;
            }

        });

    case fromTodo.BORRAR_TODO:
        return state.filter( todoEdit => todoEdit.id !== action.id );

    case fromTodo.BORRAR_ALL_TODO:
        return state.filter( todoEdit => !todoEdit.completado );

 */
    default:
        return state;

   }

}


