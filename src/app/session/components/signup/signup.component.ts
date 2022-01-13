import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppStateWithLogin } from '../../store/reducers';

//actions user
import * as actionsUser from '../../store/actions'


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass']
})
export class SignupComponent implements OnInit {

  signupFormGroup!: FormGroup;

  constructor(private store: Store<AppStateWithLogin>,
    private router: Router,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.signupFormGroup = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      fullName: ['', Validators.required]
    });
  }

  goToDashBoard() {
    this.router.navigate(['./dashboard']);
  }

  signup() {
    let objData = {
      email: this.signupFormGroup?.value.email,
      password: this.signupFormGroup?.value.password,
      fullName: this.signupFormGroup?.value.fullName
    }
    
    this.store.dispatch(actionsUser.initSignup(objData));
  }




}
