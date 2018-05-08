import { Observable } from 'rxjs/Observable';
import { User } from '../../app/interfaces/user';
export class AngularFireAuthMock {
  user: Observable<User>;
  constructor() {
    this.user = Observable.of(<any>{
      uid: 'someId'
    });
  }

  get authState(): Observable<User> {
    return this.user;
  }
}
