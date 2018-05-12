import { Injectable } from '@angular/core';
import { LoggerInterface, LoggerOptions } from '../../interfaces/logger';

@Injectable({
  providedIn: 'root'
})
export class LoggerServiceStub implements LoggerInterface {
  constructor() {}

  log(message: string, options?: LoggerOptions) {}

  error(message: string, options?: LoggerOptions) {}
}
