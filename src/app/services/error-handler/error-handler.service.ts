import { Injectable, ErrorHandler, Inject, Injector } from '@angular/core';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService implements ErrorHandler {
  constructor(@Inject(Injector) private injector: Injector) {}

  // handle all errors using google analytics
  handleError(error: any) {
    console.error('[ErrorHandlerService]', error);
    this.getGoogleAnalytics.exceptionTrack(error);
  }

  // prevent cyclic dependencies
  private get getGoogleAnalytics(): Angulartics2GoogleAnalytics {
    return this.injector.get(Angulartics2GoogleAnalytics);
  }
}
