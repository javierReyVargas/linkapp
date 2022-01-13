import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStateWithDashboard } from '../store/reducers';
import * as dasboardActions from '../store/actions'
import { AppStateWithLogin } from 'src/app/session/store/reducers';
import { logout } from 'src/app/session/store/actions';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {

  arrData = [];
  constructor(private store: Store<AppStateWithDashboard>,
    private storeLogin: Store<AppStateWithLogin>) { 
    this.dispatchGetDataLinks();
  }

  ngOnInit(): void {
    this.loadList();
  }

  dispatchGetDataLinks() {
    this.store.dispatch(dasboardActions.loadListUrls());
  }
  loadList() {
    this.store.select('dashboard').subscribe(
      (data: any) => {
        this.arrData = data.listLinks;
      }
    )
  }

  deleteLink(id: any) {
    this.store.dispatch(dasboardActions.deleteLink({id: id}))
  }

  addLink(objData: any) {
    this.store.dispatch(dasboardActions.createLink(
      objData
    ))
  }

  logout() {
    this.storeLogin.dispatch(logout());
  }

}
