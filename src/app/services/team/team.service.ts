import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TeamService {
  constructor(
    private fireDb: AngularFirestore,
    private authService: AuthService
  ) {}

  getOne(id: string): Observable<any> {
    return Observable.of({});
  }
}
