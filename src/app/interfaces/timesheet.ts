export interface Timesheet {
  createdBy: string;
  date: Date;
  startTime: any; // TODO: add type interface for time
  endTime: any; // TODO: add type interface for time
  breakTime: any; // TODO: add type interface for time
  workType: string;
  project?: string;
  team?: string;
  description: string;
}
