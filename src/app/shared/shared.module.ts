import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Components
import { LogoComponent } from './logo/logo.component';

//layout
import { FlexLayoutModule } from '@angular/flex-layout';


//Material
import {MatButtonModule} from '@angular/material/button';





@NgModule({
  declarations: [
    LogoComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    FlexLayoutModule
  ],
  exports: [
    LogoComponent,
    MatButtonModule,
    FlexLayoutModule
  ]
})
export class SharedModule { }
