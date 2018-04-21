import { Injectable } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarRef,
  SimpleSnackBar,
  MatSnackBarConfig
} from '@angular/material';

/**
 * ToastService is more or less a basic wrapper around the matSnackbar service, so we can
 * a consistent way to "notify" the user.
 */
@Injectable()
export class ToastService {
  constructor(private snackBar: MatSnackBar) {}

  /**
   *
   * @param message the message to display in the snackbar
   * @param config the configuration object that is "Object.assigned" to the sane defaults
   */
  open(
    message: string,
    config?: MatSnackBarConfig
  ): MatSnackBarRef<SimpleSnackBar> {
    return this.snackBar.open(
      message,
      'Ok',
      Object.assign(
        <MatSnackBarConfig>{
          duration: 1000
        },
        config
      )
    );
  }
}
