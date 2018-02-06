import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule, MatButtonModule, MatIconModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,

    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    NavbarComponent
  ],
  declarations: [
    NavbarComponent
  ]
})
export class NavbarModule { }
