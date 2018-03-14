import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { TimesheetService } from '../services/timesheet/timesheet.service';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Timesheet } from '../interfaces/timesheet';
import { AuthService } from '../services/auth/auth.service';
import { Observable } from 'rxjs/Observable';
import { User } from '../interfaces/user';
import { Subject } from 'rxjs/Subject';
import { takeUntil, take } from 'rxjs/operators';
import { DocumentReference } from '@firebase/firestore-types';

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styles: [
    ':host { height: 100%; overflow: auto;}'
  ]
})
export class TimesheetComponent implements OnInit, OnDestroy {
  @ViewChild('form') form: NgForm;
  edit: boolean;
  timesheet: Timesheet;
  user$: Observable<User>;
  private takeUntil = new Subject();
  constructor(
    private timesheetService: TimesheetService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    console.log('in timesheet', this.form);
    this.user$ = this.authService.user;
    // TODO: add check if we need to create a new timesheet, to support edits.
    this.timesheet = this.timesheetService.getDefault();
  }
  ngOnDestroy() {
    this.takeUntil.next();
    this.takeUntil.unsubscribe();
  }
  /**
   * Called when the user submits the form.
   *
   * @memberof TimesheetComponent
   */
  submit() {
    console.log('test in submit', this.form);
    this.form.value
      ? this.edit
        ? this.updateTimesheet()
        : this.createTimesheet()
      : this.showValidationError();
  }
  /*
   * Creates the timesheet using the timesheet service.
   *
   * @memberof TimesheetComponent
   */
  createTimesheet() {
    this.timesheetService.create(this.form.value)
    .pipe(take(1))
    .pipe(takeUntil(this.takeUntil))
    .subscribe(() => {
      console.log('updated successfully');
      // TODO: show toast we created successfully!
      this.router.navigate(['/sheets']);
    }, (err) => {
      console.error(err);
    });
  }
  /**
   * Updates the current timesheet.
   *
   * @memberof TimesheetComponent
   */
  updateTimesheet() {
    this.timesheetService.update(this.form.value)
    .pipe(take(1))
    .pipe(takeUntil(this.takeUntil))
    .subscribe(() => {
      console.log('returned after update');
      this.router.navigate(['/sheets']);
    }, (err) => {
      console.error(err);
    });
  }
  /**
   * Utility function that sets the timesheets date to today
   *
   * @memberof TimesheetComponent
   */
  getTodaysDate() {
    const date = new Date().toDateString();
    console.log('created date: ', date);
    this.timesheet.date = date;
  }
  showValidationError() {
    // TODO: show validation error
    console.error('validation error');
  }
  preview() {
    // TODO: decide if we want to re-route or show a dialog.
    console.log('test clicked on preview');
  }
  cancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}
