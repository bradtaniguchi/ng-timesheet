import { Injectable, ErrorHandler } from '@angular/core';

@Injectable()
export class ErrorHandlerService implements ErrorHandler {

  constructor() { }
  handleError(error: any) {
    console.error('[ErrorHandlerService]', error);
  }
}
