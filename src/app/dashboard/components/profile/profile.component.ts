import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStateWithLogin } from 'src/app/session/store/reducers';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {

  name: string = '';
  email: string = '';
  constructor(private store: Store<AppStateWithLogin>) { }

  ngOnInit(): void {

    this.loadProfile()
  }

  loadProfile() {
    this.store.select('auth').subscribe(
      data => {
        this.name = data.fullName !== '' ? data.fullName: 'Jeff Brown';
        this.email = data.email !== '' ? data.email: 'jeff.brown@example.com';
      }
    )
  }

}
