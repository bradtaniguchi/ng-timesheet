import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav.component';
import { MatToolbarModule, MatIconModule, MatButtonModule, MatListModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { SidenavStoreService } from './sidenav-store.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    // material modules
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
  ],
  exports: [
    SidenavComponent
  ],
  declarations: [
    SidenavComponent
  ],
  providers: [
    SidenavStoreService
  ]
})
export class SidenavModule { }
