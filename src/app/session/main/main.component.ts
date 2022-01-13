import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStateWithLogin } from '../store/reducers';
import * as actionsUser from '../store/actions'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {


  textButton: string = 'LOGIN';
  urlButton: string = 'signup';

  constructor(private store: Store<AppStateWithLogin>) {
    this.loadInitData();
  }

  ngOnInit(): void {
  }

  loadInitData() {

    this.store.select('auth')
              .subscribe(
                (data) => {
                  this.validateDataButton(data);
                }
              );
  }

  validateDataButton(data: any) {

    if (data.isViewLogin) {

      this.textButton = 'SIGNUP';
      this.urlButton = './signup';

    } else {

      this.textButton = 'LOGIN';
      this.urlButton = 'login';

    }

  }

  goToViewAuth() {

    if (this.textButton === 'LOGIN') {

      this.store.dispatch(actionsUser.viewLogin());

    } else {

      this.store.dispatch(actionsUser.viewSignup());
      
    }

  }

}
