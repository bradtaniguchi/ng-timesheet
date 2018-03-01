import { Component, OnInit, ViewChild } from '@angular/core';
import { TimesheetService } from '../services/timesheet/timesheet.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Timesheet } from '../interfaces/timesheet';
import { AuthService } from '../services/auth/auth.service';
import { Observable } from 'rxjs/Observable';
import { User } from '../interfaces/user';

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
  user$: Observable<User>;
  constructor(
    private timesheetService: TimesheetService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    console.log('in timesheet', this.form);
    this.user$ = this.authService.user
      .do((user) => console.log('test with user', user));
    // for not timesheet will always be "new"
    this.timesheet = <any>{};
  }
  submit() {
    console.log('test in submit', this.form);
  }
  preview() {
    // TODO: decide if we want to re-route or show a dialog.
    console.log('test clicked on preview');
  }
  cancel() {
    this.router.navigate(['../']);
  }
}
