import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AppState } from '../../../rgrx/app.reducers';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loading = false;
  subscriberStore: Subscription = new Subscription();

  constructor(public authService: AuthService,
              private store: Store<AppState>) { }

  ngOnInit() {
    this.subscriberStore = this.store.select('loading').subscribe( ( valor) => {
        this.loading = valor;
    });
  }

  onSubmit( data: any ) {

    this.authService.login( data.email, data.password );

  }

}
