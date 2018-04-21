import {
  async,
  ComponentFixture,
  TestBed,
  inject
} from '@angular/core/testing';

import { TimesheetViewComponent } from './timesheet-view.component';
import { RouterTestingModule } from '@angular/router/testing';
import {
  Router,
  ActivatedRoute,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Location } from '@angular/common';
import { AuthService } from '../services/auth/auth.service';
import { AuthServiceStub } from '../../tests/stubs/auth-service.stub';
import { Observable } from 'rxjs/Observable';
import { takeUntil } from 'rxjs/operators';
import { TimeSheetServiceStub } from '../../tests/stubs/time-sheet-service.stub';
import { TimesheetService } from '../services/timesheet/timesheet.service';
import { Timesheet } from '../interfaces/timesheet';
import { MatButtonModule, MatCardModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

describe('TimesheetViewComponent', () => {
  let component: TimesheetViewComponent;
  let fixture: ComponentFixture<TimesheetViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
        FlexLayoutModule,
        MatCardModule,
        MatButtonModule
      ],
      declarations: [TimesheetViewComponent],
      providers: [
        {
          provide: AuthService,
          useClass: AuthServiceStub
        },
        {
          provide: TimesheetService,
          useClass: TimeSheetServiceStub
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimesheetViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('on destroy exists', () => {
    expect(component.ngOnDestroy).toBeDefined();
  });
  it('takeUntil is called on destroy', () => {
    spyOn((component as any).takeUntil, 'next').and.callThrough();
    component.ngOnDestroy();
    expect((component as any).takeUntil.next).toHaveBeenCalled();
  });
  it('component goBack exists', () => {
    expect(component.goBack).toBeDefined();
  });
  it(
    'component goBack, redirects the user back, using the location service',
    inject([Location], (location: Location) => {
      spyOn(location, 'back').and.callFake(() => {});
      component.goBack();
      expect(location.back).toHaveBeenCalled();
    })
  );
  it('component edit exists', () => {
    expect(component.edit).toBeDefined();
  });
  it(
    'component edit, directs the user to the edit page for the timesheet',
    inject(
      [Router, ActivatedRoute],
      (router: Router, activatedRoute: ActivatedRoute) => {
        spyOn(router, 'navigate').and.callFake(() => {});
        (component as any).timesheet = {
          id: 'fakeId'
        };
        component.edit();
        expect(router.navigate).toHaveBeenCalledWith(['../', 'fakeId'], {
          relativeTo: activatedRoute
        });
      }
    )
  );

  it(
    'component gets the current user in OnInit',
    inject([AuthService], (authService: AuthService) => {
      const fakeUser = {
        uid: 'fakeUser'
      };
      const spy = spyOnProperty(authService, 'user', 'get').and.returnValue(
        Observable.of(fakeUser)
      );
      component.ngOnInit();
      expect(spy).toHaveBeenCalled();
      expect((component as any).user).toEqual(fakeUser);
    })
  );
  it('component canEdit, returns false if user is not defined', () => {
    (component as any).user = undefined;
    fixture.detectChanges();
    expect(component.canEdit()).toBeFalsy();
  });
  it('component canEdit, returns true only if the timesheet is the users', () => {
    (component as any).user = {
      uid: 'fakeId'
    };
    (component as any).timesheet = {
      createdBy: {
        uid: 'fakeId'
      }
    };
    fixture.detectChanges();
    expect(component.canEdit()).toBeTruthy();
  });
  it('component canEdit, returns false if the timesheet is not the users', () => {
    (component as any).user = {
      uid: 'fakeId'
    };
    (component as any).timesheet = {
      createdBy: {
        uid: 'someOtherId'
      }
    };
    fixture.detectChanges();
    expect(component.canEdit()).toBeFalsy();
  });
});
