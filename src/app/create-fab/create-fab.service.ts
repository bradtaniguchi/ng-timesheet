import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CreateFabService {
  private fabClicked$ = new Subject();
  constructor() { }
  emitClick(): void {
    this.fabClicked$.next();
  }
  click(): Observable<{}> {
    return this.fabClicked$.asObservable();
  }
}
