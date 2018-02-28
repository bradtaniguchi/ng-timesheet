import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimesheetComponent } from './timesheet.component';
import { MatCardModule, MatButtonModule, MatFormFieldModule, MatSelectModule, MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    FlexLayoutModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  exports: [
    TimesheetComponent
  ],
  declarations: [
    TimesheetComponent
  ]
})
export class TimesheetModule { }
