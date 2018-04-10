import { PersonTag } from './person-tag';
/**
 * Timesheet represents the timesheet object.
 */
export interface Timesheet {
  id?: string;
  createdBy?: PersonTag;
  createdOn?: number; // date timestamp
  updatedOn?: number; // date timestamp
  date: string;
  startTime: string | number;
  endTime: string | number;
  breakTime: any; // TODO: add type interface for time
  workType: string;
  project?: string;
  team?: string;
  description: string;
}
