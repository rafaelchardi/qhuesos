import { User } from './../model/user.model';
import { Action } from '@ngrx/store';

export const AGREGAR_USER = '[TODO] Agregar usuario';

export const EDITAR_USER = '[TODO] Editar usuario';

export const BORRAR_USER = '[TODO] Borrar usuario';


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
