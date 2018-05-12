import { from as observableFrom, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

const user = {
  uid: 'userId',
  displayName: 'test name'
};
@Injectable()
export class AuthServiceStub {
  constructor() {}
  get user() {
    return observableFrom([null, user]);
  }
}
