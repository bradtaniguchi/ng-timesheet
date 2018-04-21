import { TestBed, inject } from '@angular/core/testing';

import { ToastService } from './toast.service';
import { MatSnackBarModule } from '@angular/material';

describe('ToastService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatSnackBarModule],
      providers: [ToastService]
    });
  });

  it(
    'should be created',
    inject([ToastService], (service: ToastService) => {
      expect(service).toBeTruthy();
    })
  );
});
