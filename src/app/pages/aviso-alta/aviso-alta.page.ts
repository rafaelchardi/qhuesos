import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/auth.service';

@Component({
  selector: 'app-aviso-alta',
  templateUrl: './aviso-alta.page.html',
  styleUrls: ['./aviso-alta.page.scss'],
})
export class AvisoAltaPage implements OnInit {

  constructor(protected authService: AuthService ) { }

  ngOnInit() {
  }

  onclick() {

    this.authService.logout();


  }
}
