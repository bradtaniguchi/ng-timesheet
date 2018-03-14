import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesheetComponent } from './timesheet.component';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatFormFieldModule,
  MatSelectModule,
  MatIconModule,
  MatListModule
} from '@angular/material';
import { TimeSheetServiceStub } from '../../tests/stubs/time-sheet-service.stub';
import { TimesheetService } from '../services/timesheet/timesheet.service';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '../services/auth/auth.service';
import { AuthServiceStub } from '../../tests/stubs/auth-service.stub';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';

describe('TimesheetComponent', () => {
  let component: TimesheetComponent;
  let fixture: ComponentFixture<TimesheetComponent>;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
        NoopAnimationsModule,
        FormsModule,
        FlexLayoutModule,
        MatInputModule,
        MatCardModule,
        MatButtonModule,
        MatFormFieldModule,
        MatSelectModule,
        MatIconModule,
        MatListModule
      ],
      declarations: [ TimesheetComponent ],
      providers: [
        { provide: AuthService, useClass: AuthServiceStub},
        {provide: TimesheetService, useClass: TimeSheetServiceStub}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimesheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('submit fires updateTimesheet when editing', () => {
    component.edit = true;
    spyOn(component, 'updateTimesheet').and.callFake(() => undefined);
    component.submit();
    expect(component.updateTimesheet).toHaveBeenCalled();
  });
  it('submit fires create when not editing', () => {
    component.edit = false;
    spyOn(component, 'createTimesheet').and.callFake(() => undefined);
    component.submit();
    expect(component.createTimesheet).toHaveBeenCalled();
  });
  it('submit shows validation error, if form.value is undefined ', () => {
    (component.form as any) = {
      value: undefined
    };
    spyOn(component, 'showValidationError').and.callFake(() => undefined);
    component.submit();
    expect(component.showValidationError).toHaveBeenCalled();
  });

  it('createTimesheet subscribes to timesheetCreate', () => {
    const service: TimesheetService = (component as any).timesheetService;
    spyOn(service, 'create').and.returnValue(Observable.of({}));
    component.createTimesheet();
    expect(service.create).toHaveBeenCalled();
  });
  it('updateTimesheet subscribes to timesheetCreate', () => {
    const service: TimesheetService = (component as any).timesheetService;
    spyOn(service, 'update').and.returnValue(Observable.of({}));
    component.updateTimesheet();
    expect(service.update).toHaveBeenCalled();
  });
});
