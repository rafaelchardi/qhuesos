import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit( data: any ) {

    this.authService.login( data.email, data.password );

  }

}
