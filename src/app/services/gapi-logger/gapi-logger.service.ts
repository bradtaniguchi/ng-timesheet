import { Injectable } from '@angular/core';
import { ServicesModule } from '../services.module';
import { LoggerInterface } from '../../interfaces/logger';

console.log('WHAT IN GAPI LOGGER SERVICE');
@Injectable({
  providedIn: 'root'
})
export class GapiLoggerService {
  constructor() {}
}
