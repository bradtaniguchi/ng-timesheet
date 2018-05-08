import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesheetListComponent } from './timesheet-list.component';
import {
  MatTableModule,
  MatCardModule,
  MatPaginatorModule
} from '@angular/material';
import { TimesheetService } from '../services/timesheet/timesheet.service';
import { TimeSheetServiceStub } from '../../tests/stubs/time-sheet-service.stub';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Component, Input } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { Timesheet } from '../interfaces/timesheet';

@Component({
  selector: 'app-timesheet-table',
  template: `<p>mock timesheet-list-table-component</p>`
})
class MockTimesheetListTableComponent {
  @Input() selection: SelectionModel<Timesheet>;
}
// another test that just throws an error??
describe('TimesheetListComponent', () => {
  let component: TimesheetListComponent;
  let fixture: ComponentFixture<TimesheetListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FlexLayoutModule],
      declarations: [TimesheetListComponent, MockTimesheetListTableComponent],
      providers: [
        // {provide: TimesheetService, useClass: TimeSheetServiceStub}
      ]
    }).compileComponents();
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
