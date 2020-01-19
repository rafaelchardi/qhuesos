
import { Action } from '@ngrx/store';

export const ACTIVAR_LOADING = '[LOADING] Activar loading';

export const DESACTIVAR_LOADING = '[LOADING] Desactivar loading';



export class ActivarLoadingAction implements Action {
    readonly type = ACTIVAR_LOADING;

    constructor() {}

}


export class DesactivarLoadingAccion implements Action {
    readonly type = DESACTIVAR_LOADING;
    constructor() {}
}


export type Acciones = ActivarLoadingAction | DesactivarLoadingAccion ;
