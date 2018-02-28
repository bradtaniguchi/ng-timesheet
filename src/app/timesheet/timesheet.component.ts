import { Component, OnInit, ViewChild } from '@angular/core';
import { TimesheetService } from '../services/timesheet/timesheet.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Timesheet } from '../interfaces/timesheet';

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styles: [
    ':host { height: 100%; overflow: auto;}'
  ]
})
export class TimesheetComponent implements OnInit {
  edit: boolean;
  @ViewChild('form') form: NgForm;
  timesheet: Timesheet;
  constructor(
    private timesheetService: TimesheetService,
    private router: Router
  ) { }

  ngOnInit() {
    console.log('in timesheet', this.form);

    // for not timesheet will always be "new"
    this.timesheet = <any>{};
  }
  cancel() {
    this.router.navigate(['../']);
  }
}
