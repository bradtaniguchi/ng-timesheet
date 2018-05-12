import { TestBed, inject } from '@angular/core/testing';

import { GapiLoggerService } from './gapi-logger.service';

describe('GapiLoggerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GapiLoggerService]
    });
  });

  it(
    'should be created',
    inject([GapiLoggerService], (service: GapiLoggerService) => {
      expect(service).toBeTruthy();
    })
  );
});
