import { TestBed, inject } from '@angular/core/testing';

import { SearchBarStoreService } from './search-bar-store.service';

describe('SearchbarStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchBarStoreService]
    });
  });

  it('should be created', inject([SearchBarStoreService], (service: SearchBarStoreService) => {
    expect(service).toBeTruthy();
  }));
});
