import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimesheetListComponent } from './timesheet-list.component';
import { MatTableModule, MatCardModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';

@NgModule({
  imports: [
    CommonModule,

    // angular material
    MatTableModule,
    CdkTableModule,
    MatCardModule,
    MatPaginatorModule,
    MatSortModule
  ],
  exports: [
    TimesheetListComponent
  ],
  declarations: [
    TimesheetListComponent
  ]
})
export class TimesheetListModule { }
