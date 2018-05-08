import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentUserProfileComponent } from './current-user-profile.component';
import { MatButtonModule, MatTooltipModule } from '@angular/material';

@NgModule({
  imports: [CommonModule, MatTooltipModule],
  declarations: [CurrentUserProfileComponent],
  exports: [CurrentUserProfileComponent]
})
export class CurrentUserProfileModule {}
