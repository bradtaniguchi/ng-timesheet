import { padSingleDigits } from './to-common-date';
export function getTimeFromDate(date: Date): string {
  const hour = date.getHours();
  const minutes = date.getMinutes();
  return '' + padSingleDigits(hour) + ':' + padSingleDigits(minutes);
}
