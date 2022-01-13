import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStateWithLogin } from '../../store/reducers';

//actions user
import * as actionsUser from '../../store/actions'
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  loginFormGroup!: FormGroup;

  constructor(private store: Store<AppStateWithLogin>,
              private router: Router,
              private fb: FormBuilder) {
              }

  ngOnInit(): void {
    this.loginFormGroup = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

    this.store.select('auth')
              .subscribe( data => {
                this.readyLogin(data);
              });
  }

  readyLogin(data: any) {

    if (data.token !== undefined && data.token !== '') {
      this.goToDashBoard();
    } else {
      //this.goToLogin();
    }

  }

  goToDashBoard() {
    this.router.navigate(['./dashboard']);
  }

  goToLogin() {
    this.router.navigate(['./']);
  }

  login() {
    let objData = {
      email: this.loginFormGroup?.value.email,
      password: this.loginFormGroup?.value.password
    }

    this.store.dispatch(actionsUser.initsession(objData));
  }

}
