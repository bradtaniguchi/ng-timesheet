import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  DefaultQueryConfig,
  DEFAULT_QUERY_CONFIG
} from './default-query-config';

@NgModule({
  imports: [CommonModule],
  declarations: [],
  providers: [
    {
      provide: DEFAULT_QUERY_CONFIG,
      useValue: DefaultQueryConfig
    }
  ]
})
export class ConstantsModule {}
