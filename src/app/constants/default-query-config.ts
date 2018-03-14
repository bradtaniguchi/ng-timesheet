import { InjectionToken } from '@angular/core';
import { QueryConfig } from '../interfaces/query-config';

export let DEFAULT_QUERY_CONFIG = new InjectionToken('DEFAULT_QUERY_CONFIG');

export const DefaultQueryConfig: QueryConfig = {
  ref: undefined,
  user: undefined,
  orderBy: 'id', // TODO: update later to last updated
  startAfter: 0, // TODO: test
  limit: 15
};
