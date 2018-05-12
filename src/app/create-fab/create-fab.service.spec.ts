import { TestBed, inject } from '@angular/core/testing';

import { CreateFabService } from './create-fab.service';

describe('CreateFabService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateFabService]
    });
  });

  it(
    'should be created',
    inject([CreateFabService], (service: CreateFabService) => {
      expect(service).toBeTruthy();
    })
  );
});
