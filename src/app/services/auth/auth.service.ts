import { of as observableOf, Observable } from 'rxjs';

import { share, switchMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { OAuthProvider } from '@firebase/auth-types';
import * as firebase from 'firebase/app';
import { User } from '../../interfaces/user';

@Injectable()
export class AuthService {
  private currentUser: Observable<User>;
  constructor(
    private fireDb: AngularFirestore,
    private fireAuth: AngularFireAuth
  ) {
    console.log('starting in auth');
    this.currentUser = this.fireAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.fireDb.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return observableOf(null);
        }
      })
    );
    // .do((user) => console.log('>>> auth:', user));
  }

  get user(): Observable<User> {
    return this.currentUser.pipe(share());
  }
  getUser(): Observable<User> {
    return this.currentUser.pipe(share());
  }
  /**
   * Opens the sign in with popup dialog
   */
  authLoginPopup(): Promise<any> {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.fireAuth.auth.signInWithPopup(provider).then(cred => {
      console.log('authLoginPopup: ', cred);
      return this.updateUserData(cred.user);
    });
  }

  authLoginRedirect(): Promise<any> {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.fireAuth.auth.signInWithRedirect(provider).then(cred => {
      console.log('redirect cred?: ', cred);
      return this.updateUserData(cred.user);
    });
  }

  /**
   * Logs the user out
   */
  logout(): Promise<any> {
    return this.fireAuth.auth.signOut();
  }

  // TODO: Migrate some of this logic to a user service, which provides crud functions on users
  private createUserData(user: User): Promise<void> {
    const collection = this.fireDb.collection<User>('users');
    const newUserRef = collection.doc(user.uid);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      createdOn: new Date()
    };
    return newUserRef.ref.set(user);
  }
  private updateUserData(user: User): Promise<void> {
    const collection = this.fireDb.collection<User>('users');
    const userRef = this.fireDb.doc(`users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      lastUpdated: new Date()
    };
    return userRef.set(userData, {
      merge: true
    });
  }
}
