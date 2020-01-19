import * as fromLoading from './../actions/loading.actions';


export function LoadingReducer( state = false,
                                action: fromLoading.Acciones ): boolean {

   switch ( action.type ) {

    case fromLoading.ACTIVAR_LOADING:
         return  true;

    case fromLoading.DESACTIVAR_LOADING:

        return  false;
   }
}
