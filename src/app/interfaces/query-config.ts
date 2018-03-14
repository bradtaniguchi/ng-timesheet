import { CollectionReference } from '@firebase/firestore-types';
import { User } from './user';
export interface QueryConfig {
  ref: CollectionReference;
  user: User;
  orderBy: string;
  startAfter: number;
  limit: number;
}
