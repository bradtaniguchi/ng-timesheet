import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesheetListComponent } from './timesheet-list.component';
import { MatTableModule, MatCardModule, MatPaginatorModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { TimesheetService } from '../services/timesheet/timesheet.service';
import { TimeSheetServiceStub } from '../../tests/stubs/time-sheet-service.stub';

// another test that just throws an error??
describe('TimesheetListComponent', () => {
  let component: TimesheetListComponent;
  let fixture: ComponentFixture<TimesheetListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatTableModule,
        CdkTableModule,
        MatCardModule,
        MatPaginatorModule
      ],
      declarations: [ TimesheetListComponent ],
      providers: [
        {provide: TimesheetService, useClass: TimeSheetServiceStub}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimesheetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
