import { TestBed, async, inject } from '@angular/core/testing';

import { TimesheetViewGuard } from './timesheet-view.guard';
import { ActivatedRoute, CanActivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { TimesheetService } from '../services/timesheet/timesheet.service';
import { Timesheet } from '../interfaces/timesheet';
import { AuthService } from '../services/auth/auth.service';
import { User } from '../interfaces/user';
import { RouterTestingModule } from '@angular/router/testing';

class TimesheetServiceStub {
  getOne() {
    return Observable.of({});
  }
}
class AuthServiceStub {
  getUser() {
    return Observable.of({});
  }
}
describe('TimesheetViewGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([])],
      providers: [
        TimesheetViewGuard,
        {
          provide: TimesheetService,
          useClass: TimesheetServiceStub
        },
        {
          provide: AuthService,
          useClass: AuthServiceStub
        }
      ]
    });
  });

  it(
    'should exist',
    inject([TimesheetViewGuard], (guard: TimesheetViewGuard) => {
      expect(guard).toBeTruthy();
    })
  );

  it(
    'should have canActivate function',
    inject([TimesheetViewGuard], (guard: TimesheetViewGuard) => {
      expect(guard.canActivate).toBeDefined();
    })
  );

  it(
    'calls getOne from the timesheet service',
    inject(
      [TimesheetViewGuard, TimesheetService, ActivatedRoute],
      (
        guard: TimesheetViewGuard,
        service: TimesheetService,
        route: ActivatedRoute
      ) => {
        spyOn(service, 'getOne').and.returnValue(
          Observable.of(<Timesheet>{ createdBy: { uid: 'someUserId' } })
        );
        const next = <any>{
          params: {
            id: 'someId'
          }
        };
        guard.canActivate(next, null);
        expect(service.getOne).toHaveBeenCalled();
      }
    )
  );
  it(
    'calls getUser from authService',
    inject(
      [TimesheetViewGuard, AuthService],
      (guard: TimesheetViewGuard, service: AuthService) => {
        spyOn(service, 'getUser').and.returnValue(
          Observable.of(<User>{ uid: 'someUserId' })
        );
        const next = <any>{
          params: {
            id: 'someId'
          }
        };
        guard.canActivate(next, null);
      }
    )
  );
  describe('hasAccess', () => {
    it(
      'returns false if timesheet does not exist',
      inject([TimesheetViewGuard], (guard: TimesheetViewGuard) => {
        const timesheet: any = undefined;
        const user: any = {};
        expect((guard as any).hasAccess(timesheet, user)).toBeFalsy();
      })
    );
    it(
      'returns false if timesheet does not have createdBy',
      inject([TimesheetViewGuard], (guard: TimesheetViewGuard) => {
        const timesheet: any = {
          createdBy: undefined
        };
        const user = {};
        expect((guard as any).hasAccess(timesheet, user)).toBeFalsy();
      })
    );
    it(
      'returns false if the user does not exist',
      inject([TimesheetViewGuard], (guard: TimesheetViewGuard) => {
        const timesheet: any = {
          createdBy: {
            uid: 'userId'
          }
        };
        const user: any = undefined;
        expect((guard as any).hasAccess(timesheet, user)).toBeFalsy();
      })
    );
    it(
      'returns true if user has access',
      inject([TimesheetViewGuard], (guard: TimesheetViewGuard) => {
        const timesheet: any = {
          createdBy: {
            uid: 'userId'
          }
        };
        const user: any = {
          uid: 'userId'
        };
        expect((guard as any).hasAccess(timesheet, user)).toBeTruthy();
      })
    );
  });
});
