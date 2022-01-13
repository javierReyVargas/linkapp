import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Components
import { LogoComponent } from './logo/logo.component';

//layout
import { FlexLayoutModule } from '@angular/flex-layout';


//Material
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LogoComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    FlexLayoutModule,
    MatCardModule,
    MatInputModule,
    MatIconModule
  ],
  exports: [
    LogoComponent,
    MatButtonModule,
    FlexLayoutModule,
    MatCardModule,
    MatInputModule,
    MatIconModule
  ]
})
export class SharedModule { }
