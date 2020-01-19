
export class User {

    public nombre: string;
    public email: string;
    public uid: string;
    public activadoAdmin: boolean;

    constructor( nombre: string, email: string, uid: string , activado: boolean ) {
        this.nombre = nombre;
        this.uid = uid;
        this.email = email;
        this.activadoAdmin = activado;
    }

}

