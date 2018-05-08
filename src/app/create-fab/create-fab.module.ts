import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateFabComponent } from './create-fab.component';
import { CreateFabService } from './create-fab.service';
import { MatButtonModule, MatIconModule } from '@angular/material';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatIconModule],
  declarations: [CreateFabComponent],
  providers: [CreateFabService]
})
export class CreateFabModule {}
