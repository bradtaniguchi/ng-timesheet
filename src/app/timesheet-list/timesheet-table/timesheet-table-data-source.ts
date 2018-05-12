import {
  merge as observableMerge,
  Observable,
  Subject,
  BehaviorSubject
} from 'rxjs';

import { tap, filter, takeUntil, switchMap } from 'rxjs/operators';
import { TimesheetService } from '../../services/timesheet/timesheet.service';
import { DataSource } from '@angular/cdk/table';
import { Timesheet } from '../../interfaces/timesheet';
import { SearchParams } from '../../interfaces/search-params';

export class TimesheetTableDataSource extends DataSource<Timesheet> {
  private takeUntil = new Subject();
  constructor(
    private timesheetService: TimesheetService,
    private orderBy: BehaviorSubject<string>,
    private limit: BehaviorSubject<number> // private startAfter: BehaviorSubject<number>, // private endAt: BehaviorSubject<number>
  ) {
    super();
  }

  connect(): Observable<Array<Timesheet>> {
    const obs = [
      this.orderBy,
      this.limit
      // this.startAfter
    ];
    return observableMerge(...obs)
      .pipe(
        // .do((val) => console.log('ON OBS CHANGE!', val))
        filter(val => !!val)
      )
      .pipe(
        switchMap(() => {
          const searchParams: SearchParams = {
            // TODO: this isn't used correctly
            // orderBy: this.orderBy.value || 'updatedOn',
            limit: this.limit.value || 5
            // startAfter: this.startAfter.value || 1,
            // endAt: this.endAt.value || 5
          };
          return this.timesheetService
            .get(searchParams, true)
            .pipe(takeUntil(this.takeUntil))
            .pipe(tap(res => console.log('res: ', res)));
        })
      );
  }

  disconnect() {
    this.takeUntil.next();
    this.takeUntil.unsubscribe();
  }
}
