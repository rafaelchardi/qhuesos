import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/auth.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})

export class Tab3Page implements OnInit{

  componentes: Observable<Componente[]>;

  constructor(private authService: AuthService,
              private http: HttpClient) {}

  logout() {

    this.authService.logout();
  }

  ngOnInit() {
    this.componentes = this.getMenuOpts();
  }

  getMenuOpts() {
     return this.http.get<Componente[]>('/assets/data/menu.json');
  }



}

export interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}
