import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MainComponent } from './main/main.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ListUrlComponent } from './components/list-url/list-url.component';
import { CreateUrlComponent } from './components/create-url/create-url.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    MainComponent,
    ProfileComponent,
    ListUrlComponent,
    CreateUrlComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
