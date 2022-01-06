import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Components
import { LogoComponent } from './logo/logo.component';

//Material
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    LogoComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
    LogoComponent,
    MatButtonModule
  ]
})
export class SharedModule { }
