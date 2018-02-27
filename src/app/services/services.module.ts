import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavService } from './nav/nav.service';
import { AuthService } from './auth/auth.service';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
@NgModule({
  imports: [
    CommonModule,

    // firestore modules
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  declarations: [],
  providers: [
    NavService,
    AuthService,
  ]
})
export class ServicesModule { }
