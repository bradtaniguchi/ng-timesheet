export interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  createdOn?: Date;
  lastUpdated?: Date;

  // TODO: add other attributes
}
