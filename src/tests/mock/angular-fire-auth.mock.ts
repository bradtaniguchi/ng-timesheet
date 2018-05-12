import { of as observableOf, Observable } from 'rxjs';
import { User } from '../../app/interfaces/user';
export class AngularFireAuthMock {
  user: Observable<User>;
  constructor() {
    this.user = observableOf(<any>{
      uid: 'someId'
    });
  }

  get authState(): Observable<User> {
    return this.user;
  }
}
