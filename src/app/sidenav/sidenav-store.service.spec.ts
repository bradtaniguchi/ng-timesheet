import { TestBed, inject } from '@angular/core/testing';

import { SidenavStoreService } from './sidenav-store.service';

describe('NavbarStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SidenavStoreService]
    });
  });

  it(
    'should be created',
    inject([SidenavStoreService], (service: SidenavStoreService) => {
      expect(service).toBeTruthy();
    })
  );
});
