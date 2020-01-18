import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor( public authService: AuthService ) { }

  ngOnInit() {
  }

  onSubmit( data: any ) {
    this.authService.crearUsuario( data.nombre, data.email, data.password );
  }

}
