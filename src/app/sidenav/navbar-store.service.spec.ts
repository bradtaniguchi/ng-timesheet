import { TestBed, inject } from '@angular/core/testing';

import { NavbarStoreService } from './navbar-store.service';

describe('NavbarStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NavbarStoreService]
    });
  });

  it('should be created', inject([NavbarStoreService], (service: NavbarStoreService) => {
    expect(service).toBeTruthy();
  }));
});
