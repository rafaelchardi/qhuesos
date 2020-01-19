import { User } from './../model/user.model';
import { Action } from '@ngrx/store';

export const AGREGAR_USER = '[USUARIO] Establecer usuario';

export const EDITAR_USER = '[USUARIO] Modificar usuario';

export const BORRAR_USER = '[USUARIO] Borrar usuario';


export class AgregarUserAction implements Action {
    readonly type = AGREGAR_USER;

    constructor( public usuario: User ) {}

}


export class EditarUserAccion implements Action {
    readonly type = EDITAR_USER;

    constructor( public usuario: User ) {}
}

export class BorrarUserAction implements Action {
    readonly type = BORRAR_USER;

    constructor( ) {}
}


export type Acciones = AgregarUserAction |
                       EditarUserAccion |
                       BorrarUserAction;
