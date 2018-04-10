import { TestBed, inject } from '@angular/core/testing';

import { DisplayColumnService } from './display-column.service';
import { ObservableMedia } from '@angular/flex-layout';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
class MockObservableMedia {
  _size = 'sm';
  asObservable() {
    return Observable.of({
      mqAlias: this._size
    });
  }
}
const smallDisplayColumns = [
  'date',
  'startTime',
  'endTime',
  'createdBy'
];
describe('DisplayColumnService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DisplayColumnService,
        { provide: ObservableMedia, useClass: MockObservableMedia}
      ]
    });
  });

  it('should be created', inject([DisplayColumnService], (service: DisplayColumnService) => {
    expect(service).toBeTruthy();
  }));

  it('displayColumns returns array of strings', inject([DisplayColumnService], (service: DisplayColumnService) => {
    service.displayColumns.subscribe((columns) => {
      expect(Array.isArray(columns)).toBeTruthy();
    });
  }));

  it('displayColumns returns the smallDisplayColumns', inject([DisplayColumnService], (service: DisplayColumnService) => {
    service.displayColumns.subscribe((columns) => {
      console.log('TEST: ', columns);
      expect(columns).toEqual(smallDisplayColumns);
    });
  }));

  it('media observable was called', () => inject([ObservableMedia, DisplayColumnService],
    (media: MockObservableMedia, service: DisplayColumnService) => {
      spyOn(media, 'asObservable').and.callThrough();
      expect(media.asObservable).toHaveBeenCalled();
  }));

  describe('validCol', () => {
    const testCases = [
      {
        col: '',
        expected: true
      },
      {
        col: '',
        expected: true
      },
      {
        col: '',
        expected: true
      },
      {
        col: '_id',
        expected: false
      }
    ];
    testCases.forEach((testCase) => testValidCol(testCase));
    function testValidCol(testCase) {
      it(`validCol returns correct ${testCase.col} ${testCase.expected}`, () => inject([DisplayColumnService],
        (service: DisplayColumnService) => {
        const result = (service as any).validCol(testCase.col);
        expect(result).toEqual(testCase.expected);
      }));
    }
  });
  describe('getExistingDisplayValue', () => {
    // TODO: update test cases to be more useful
    const testCases = [
      {
        col: 'date',
        timesheet: {
          date: '2018-03-12'
        },
        func: 'displayDate',
        expected: '2018-04-03'
      },
      {
        col: 'date',
        timesheet: {
          date: '2018-04-03'
        },
        func: 'displayDate',
        expected: '2018-04-03'
      },
      {
        col: 'startTime',
        timesheet: {
          startTime: '20:40'
        },
        func: 'displayDate',
        expected: '20:40'
      },
      {
        col: 'endTime',
        timesheet: {
          startTime: '20:40'
        },
        func: 'displayDate',
        expected: '20:40'
      }
    ];
    testCases.forEach((testCase) => testGetExistingDisplayValue(testCase));
    function testGetExistingDisplayValue(testCase) {
      it(`getExistingDisplayValue calls function`, () =>  inject([DisplayColumnService],
        (service: DisplayColumnService) => {
          spyOn(service, testCase.func);
          (service as any).getExistingDisplayValue(testCase.timesheet, testCase.col);
          expect((service as any)[testCase.func]).toHaveBeenCalled();
      }));
      it(`getExistingDisplayValue returns readable value for col: ${testCase.col}`, () =>  inject([DisplayColumnService],
        (service: DisplayColumnService) => {
          const result = (service as any).getExistingDisplayValue(testCase.timesheet, testCase.col);
          expect(result).toEqual(testCase.expected);
      }));
    }
  });
});
