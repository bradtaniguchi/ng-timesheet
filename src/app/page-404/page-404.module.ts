import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page404Component } from './page-404.component';
import { MatCardModule, MatButtonModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    // angular material
    FlexLayoutModule,
    MatButtonModule
  ],
  declarations: [Page404Component]
})
export class Page404Module {}
