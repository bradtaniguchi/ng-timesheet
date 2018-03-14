import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesheetTableComponent } from './timesheet-table.component';
import { MatSortModule, MatPaginatorModule, MatTableModule, MatCardModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { TimesheetService } from '../../services/timesheet/timesheet.service';
import { TimeSheetServiceStub } from '../../../tests/stubs/time-sheet-service.stub';
import { DisplayColumnService } from './display-column/display-column.service';
import { Observable } from 'rxjs/Observable';
class DisplayColumnServiceStub {
  get displayColumns() {
    return Observable.of(['colOne', 'colTwo']);
  }
}
describe('TimesheetTableComponent', () => {
  let component: TimesheetTableComponent;
  let fixture: ComponentFixture<TimesheetTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatCardModule,
        MatTableModule,
        CdkTableModule,
        MatPaginatorModule,
        MatSortModule
      ],
      declarations: [ TimesheetTableComponent ],
      providers: [
        {provide: TimesheetService, useClass: TimeSheetServiceStub },
        {provide: DisplayColumnService, useClass: DisplayColumnServiceStub}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimesheetTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create dataSource', () => {
    expect(component.dataSource).toBeTruthy();
  });
});
