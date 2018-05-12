import { NgModule, ModuleWithProviders, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavService } from './nav/nav.service';
import { AuthService } from './auth/auth.service';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { TimesheetService } from './timesheet/timesheet.service';
import { ErrorHandlerService } from './error-handler/error-handler.service';
import { MatDialogModule } from '@angular/material';
import { DialogService } from './dialog/dialog.service';
import { ToastService } from './toast/toast.service';
import { injectionEnvironment } from '../../injection-environments/injection-environment.prod';
@NgModule({
  imports: [
    CommonModule,

    // firestore modules
    AngularFirestoreModule,
    AngularFireAuthModule,
    MatDialogModule
  ],
  declarations: []
})
export class ServicesModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: ServicesModule,
      providers: [
        NavService,
        AuthService,
        TimesheetService,
        DialogService,
        ToastService,
        {
          provide: ErrorHandler,
          useClass: ErrorHandlerService
        },
        // conditionally insert logger service, based on env
        {
          provide: 'LoggerService',
          useClass: injectionEnvironment.logger
        }
      ]
    };
  }
}
