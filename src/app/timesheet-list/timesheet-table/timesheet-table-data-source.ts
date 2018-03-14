import { TimesheetService } from '../../services/timesheet/timesheet.service';
import { DataSource } from '@angular/cdk/table';
import { Timesheet } from '../../interfaces/timesheet';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

export class TimesheetTableDataSource extends DataSource<Timesheet> {
  private takeUntil = new Subject();
  constructor(
    private timesheetService: TimesheetService
  ) {
    super();
  }

  connect(): Observable<Array<Timesheet>> {
    // TODO: update what we pass in the get, for pagination.
    // return this.timesheetService.get().do((data) => console.log('data: ', data));
    const searchParams = {

    };
    return this.timesheetService.get(searchParams);
  }

  disconnect() {
    this.takeUntil.next();
    this.takeUntil.unsubscribe();
  }
}
