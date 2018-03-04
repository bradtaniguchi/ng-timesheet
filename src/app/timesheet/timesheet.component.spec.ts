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
});
