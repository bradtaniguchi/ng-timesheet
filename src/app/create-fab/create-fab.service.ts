import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class CreateFabService {
  private fabClicked$ = new Subject();
  constructor() {}
  emitClick(): void {
    this.fabClicked$.next();
  }
  click(): Observable<{}> {
    return this.fabClicked$.asObservable();
  }
}
