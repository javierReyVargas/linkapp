import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MainComponent } from './main/main.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ListUrlComponent } from './components/list-url/list-url.component';
import { CreateUrlComponent } from './components/create-url/create-url.component';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { dashboardReducer } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { DashboardEffects } from './store/effects/dashboard.effects';
import { ReactiveFormsModule } from '@angular/forms';


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
    SharedModule,
    ReactiveFormsModule,
    StoreModule.forFeature('dashboard', dashboardReducer),
    EffectsModule.forFeature([DashboardEffects])
  ]
})
export class DashboardModule { }
