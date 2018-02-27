import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule, MatButtonModule, MatIconModule } from '@angular/material';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { SearchBarStoreService } from './search-bar-store.service';
import { CurrentUser } from '../interfaces/current-user';
import { CurrentUserProfileModule } from '../current-user-profile/current-user-profile.module';
@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,

    CurrentUserProfileModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    NavbarComponent
  ],
  declarations: [
    NavbarComponent,
    SearchbarComponent
  ],
  providers: [
    SearchBarStoreService
  ]
})
export class NavbarModule { }
