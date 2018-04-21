import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Timesheet } from '../interfaces/timesheet';
import { User } from '../interfaces/user';
import { AuthService } from '../services/auth/auth.service';
import { TimesheetService } from '../services/timesheet/timesheet.service';
import { takeUntil, map, tap, switchMap } from 'rxjs/operators';
import { Subject } from 'rxjs/Subject';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-timesheet-view',
  templateUrl: './timesheet-view.component.html',
  styles: [`:host { height: 100%}`]
})
export class TimesheetViewComponent implements OnInit, OnDestroy {
  timesheet$: Observable<Timesheet>;
  private timesheet: Timesheet;
  private user: User;
  private takeUntil = new Subject();
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private authService: AuthService,
    private timesheetService: TimesheetService
  ) {}

  ngOnInit() {
    this.timesheet$ = this.route.params.pipe(
      switchMap(params => this.timesheetService.getOne(params['id'])),
      takeUntil(this.takeUntil),
      tap(timesheet => (this.timesheet = timesheet))
    );
    this.authService.user
      .pipe(takeUntil(this.takeUntil))
      .subscribe(user => (this.user = user));
  }
  ngOnDestroy(): void {
    this.takeUntil.next();
    this.takeUntil.unsubscribe();
  }
  // sends the user back to the page they came from.
  goBack() {
    this.location.back();
  }
  // edits the current timesheet
  edit() {
    this.router.navigate(['../', this.timesheet.id], {
      relativeTo: this.route
    });
  }
  // returns true only if the current user can edit the timesheet
  canEdit(): boolean {
    return this.user ? this.timesheet.createdBy.uid === this.user.uid : false;
  }
  remove() {
    // TODO: add actual call todo such
  }
}
