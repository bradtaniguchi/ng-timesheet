import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
const user = {
  uid: 'userId',
  displayName: 'test name'
};
@Injectable()
export class AuthServiceStub {
  constructor() {}
  get user() {
    return Observable.from([null, user]);
  }
}
