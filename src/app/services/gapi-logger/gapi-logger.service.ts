import { Injectable } from '@angular/core';
import { ServicesModule } from '../services.module';
import { LoggerInterface } from '../../interfaces/logger';
declare const window;

@Injectable({
  providedIn: 'root'
})
export class GapiLoggerService {
  constructor() {
    console.log('test in gapi logger', window.gapi);
  }
}
