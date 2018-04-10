import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { TimesheetTableComponent } from './timesheet-table.component';
import { MatSortModule, MatPaginatorModule, MatTableModule, MatCardModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { TimesheetService } from '../../services/timesheet/timesheet.service';
import { TimeSheetServiceStub } from '../../../tests/stubs/time-sheet-service.stub';
import { DisplayColumnService } from './display-column/display-column.service';
import { Observable } from 'rxjs/Observable';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { SelectionModel } from '@angular/cdk/collections';
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
        RouterTestingModule,
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
    component.selection = new SelectionModel(true, []);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create dataSource', () => {
    expect(component.dataSource).toBeTruthy();
  });

  it('edit routes the user to the selected timesheet user', inject([Router], (router: Router) => {
    const testTimesheet = {
      id: 'testId'
    };
    const spy = spyOn(router, 'navigate');
    component.edit((testTimesheet as any));
    const url = spy.calls.first().args[0];
    expect(url).toEqual(['../sheet', 'testId']);
  }));

  it('remove deletes the given timesheet', inject([TimesheetService], (timesheetService: TimesheetService) => {
    spyOn(timesheetService, 'remove').and.callFake(() => Observable.of({}));
    component.remove(<any>{});
    expect(timesheetService.remove).toHaveBeenCalled();
  }));
});
