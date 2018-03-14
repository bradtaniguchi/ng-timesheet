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
});
