import { Injectable } from '@angular/core';
import { ServicesModule } from '../services.module';
import {
  LoggerOptions,
  LoggerInterface,
  DEFAULT_LOGGER_OPTIONS,
  LOGGER_LEVELS
} from '../../interfaces/logger';

@Injectable({
  providedIn: 'root'
})
export class LoggerService implements LoggerInterface {
  constructor() {}

  private generateMessage(message: string, options?: LoggerOptions) {
    const timeStamp = options.timeStamp ? `[${new Date()}]` : '';
    const user = ''; // TODO: implement getting user user
    const _message = `${timeStamp}${user} : ${message}`;
    switch (<any>options.level) {
      case 'WARN':
        console.warn(_message);
        break;
      case 'DEBUG':
        console.debug(_message);
        break;
      case 'ERROR':
        console.error(_message);
        break;
      case 'LOG':
      default:
        console.error(_message);
        break;
    }
  }
  log(message: string, options?: LoggerOptions) {
    this.generateMessage(
      message,
      Object.assign(DEFAULT_LOGGER_OPTIONS, options)
    );
  }
  error(message: string, options?: LoggerOptions) {
    this.generateMessage(
      message,
      Object.assign(
        DEFAULT_LOGGER_OPTIONS,
        { level: LOGGER_LEVELS.ERROR },
        options
      )
    );
  }
  // TODO: ADD DEBUG AND WARN level messaging
}
