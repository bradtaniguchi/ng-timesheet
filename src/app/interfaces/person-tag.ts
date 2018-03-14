/**
 * CreatedBy is used to "denormalize" the data saving some data that
 * doesn't change that often.
 */
export interface PersonTag {
  name: string;
  email: string;
  uid: string;
}
