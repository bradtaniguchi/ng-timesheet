import { NgModule, ModuleWithProviders, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavService } from './nav/nav.service';
import { AuthService } from './auth/auth.service';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { TimesheetService } from './timesheet/timesheet.service';
import { ErrorHandlerService } from './error-handler/error-handler.service';
@NgModule({
  imports: [
    CommonModule,

    // firestore modules
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  declarations: [],
})
export class ServicesModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: ServicesModule,
      providers: [
        NavService,
        AuthService,
        TimesheetService,
        {
          provide: ErrorHandler,
          useClass: ErrorHandlerService
        }
      ]
    };
  }
}
