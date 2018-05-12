import { merge as observableMerge, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  ActivatedRoute
} from '@angular/router';
import { TimesheetService } from '../services/timesheet/timesheet.service';
import { map, switchMap } from 'rxjs/operators';
import { AuthService } from '../services/auth/auth.service';
import { Timesheet } from '../interfaces/timesheet';
import { User } from '../interfaces/user';

@Injectable()
export class TimesheetViewGuard implements CanActivate {
  constructor(
    private timesheetService: TimesheetService,
    private authService: AuthService
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const id = next.params['id'];
    console.log('test with', id);
    return observableMerge(
      this.timesheetService.getOne(id),
      this.authService.getUser()
    ).pipe(
      map(responses => {
        const timesheet = responses[0];
        const user = responses[1];
        return this.hasAccess(timesheet, user);
      })
    );
  }

  /**
   * Returns if the user has access to the given timesheet.
   * @param timesheet the timesheet we are checking with the authService info
   * @param user the user we are checking if they have access to the timesheet
   */
  private hasAccess(timesheet: Timesheet, user: User): boolean {
    console.log('test ', timesheet, user);
    return (
      !!timesheet &&
      !!user &&
      timesheet.createdBy &&
      timesheet.createdBy.uid === user.uid
    );
  }
}
