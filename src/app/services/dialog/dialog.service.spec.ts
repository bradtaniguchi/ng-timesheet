import { TestBed, inject } from '@angular/core/testing';

import { DialogService } from './dialog.service';
import { MatDialog, MatDialogModule } from '@angular/material';
import { ObservableMedia } from '@angular/flex-layout';
import { Observable } from 'rxjs/Observable';
import { MockComponent } from '../../guards/mock-component.mock.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

class MockObservableMedia {
  _size = 'sm';
  asObservable() {
    return Observable.of({
      mqAlias: this._size
    });
  }
}
describe('DialogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatDialogModule, NoopAnimationsModule],
      providers: [
        DialogService,
        {
          provide: ObservableMedia,
          useClass: MockObservableMedia
        }
      ],
      declarations: [
        MockComponent
      ],
    });
    TestBed.overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [MockComponent]
      }
  });

  it(
    'should be created',
    inject([DialogService], (service: DialogService) => {
      expect(service).toBeTruthy();
    })
  );

  it(
    'getWidth returns a value',
    inject([DialogService], (service: DialogService) => {
      expect((service as any).getWidth()).toBeDefined();
    })
  );
  it(
    'getHeight returns a value',
    inject([DialogService], (service: DialogService) => {
      expect((service as any).getHeight()).toBeDefined();
    })
  );
  it(
    'open returns a value',
    inject([DialogService], (service: DialogService) => {
      expect(service.open(MockComponent)).toBeDefined();
    })
  );
  it(
    'open calls matDialog',
    inject([DialogService], (service: DialogService, matDialog: MatDialog) => {
      spyOn(matDialog, 'open').and.callThrough();
      service.open(MockComponent);
      expect(matDialog.open).toHaveBeenCalled();
    })
  );
  describe('getWidth', () => {
    const getWidthTestCases = [
      {
        message: 'returns 100vw for xs',
        size: 'xs',
        expected: '100vw'
      },
      {
        message: 'returns 100vw for small screens',
        size: 'sm',
        expected: '100vw'
      },
      {
        message: 'returns 75vw for large screens',
        size: 'lg',
        expected: '75vw'
      }
    ];
    getWidthTestCases.forEach(testCase => testGetWidth(testCase));
    function testGetWidth(testCase) {
      it(
        testCase.message,
        inject(
          [DialogService, ObservableMedia],
          (service: DialogService, media: ObservableMedia) => {
            (service as any).size.mqAlias = testCase.size;
            const width = (service as any).getWidth();
            expect(width).toEqual(testCase.expected);
          }
        )
      );
    }
  });
  describe('getHeight', () => {
    const getHeightTestCases = [
      {
        message: 'getHeight returns 100vh when screen is sm',
        size: 'sm',
        expected: '100vh'
      },
      {
        message: 'getHeight returns 100vh when screen is xs',
        size: 'xs',
        expected: '100vh'
      },
      {
        message: 'getHeight returns 90vh when screen is md',
        size: 'md',
        expected: '90vh'
      },
      {
        message: 'getHeight returns 75vh when screen is lg',
        size: 'lg',
        expected: '75vh'
      },
      {
        message: 'getHeight returns 75vh when screen is xl',
        size: 'xl',
        expected: '75vh'
      }
    ];
    getHeightTestCases.forEach(testCase => testGetHeightTestCase(testCase));
    function testGetHeightTestCase(testCase) {
      it(
        testCase.message,
        inject(
          [DialogService, ObservableMedia],
          (service: DialogService, media: ObservableMedia) => {
            (service as any).size.mqAlias = testCase.size;
            const width = (service as any).getHeight();
            expect(width).toEqual(testCase.expected);
          }
        )
      );
    }
  });
});
