import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentUserProfileComponent } from './current-user-profile.component';
import { MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CurrentUserProfileComponent]
})
export class CurrentUserProfileModule { }
