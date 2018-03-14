import { User } from './user';
export interface SearchParams {
  createdBy?: User;
  orderBy?: string;
  limit?: number;
  startAfter?: number;
}
