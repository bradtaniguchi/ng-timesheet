import { Injectable, TemplateRef } from '@angular/core';
import { ObservableMedia, MediaChange } from '@angular/flex-layout';
import {
  MatDialog,
  MatDialogClose,
  MatDialogConfig,
  MatDialogRef
} from '@angular/material';
import { ComponentType } from '@angular/cdk/portal';

type viewWidth = '75vw' | '90vw' | '100vw';
type viewHeight = '75vh' | '90vh' | '100vh';
@Injectable()
export class DialogService {
  private size: MediaChange;
  constructor(private matDialog: MatDialog, private media: ObservableMedia) {
    this.media.asObservable().subscribe(mediaChange => {
      this.size = mediaChange;
    });
  }

  open(
    component: ComponentType<{}> | TemplateRef<{}>,
    config?: MatDialogClose
  ): MatDialogRef<{}, any> {
    const localConfig: MatDialogConfig = config || {};
    localConfig.maxWidth = this.getWidth();
    localConfig.maxHeight = this.getHeight();
    return this.matDialog.open(component, localConfig);
  }
  private getWidth(): viewWidth {
    switch (this.size.mqAlias) {
      case 'xs':
      case 'sm':
        return '100vw';
      case 'md':
        return '90vw';
      case 'lg':
      case 'xl':
      default:
        return '75vw';
    }
  }
  private getHeight(): viewHeight {
    switch (this.size.mqAlias) {
      case 'xs':
      case 'sm':
        return '100vh';
      case 'md':
        return '90vh';
      case 'lg':
      case 'xl':
      default:
        return '75vh';
    }
  }
}
