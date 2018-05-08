/**
 * ToCommonDate transforms the given date object to the following format:
 * 2018-03-04
 * for the date of:
 * 2018, March 4th
 * @export
 * @param {Date} date the date object we are to modify
 * @returns {string} the formatted date used by the HTML5 input date field.
 */
export function toCommonDate(date: Date): string {
  const year = date.getFullYear();
  const month = padSingleDigits(date.getMonth() + 1);
  const day = padSingleDigits(date.getDate());
  return `${year}-${month}-${day}`;
}

/**
 * padSingleDigits transforms single digit numbers given as strings if they are
 * less than 10. This is useful for the first few days of a month or months of a
 * year that need to be led by a single zero if they are less than 10.
 * TODO: migrate to its own function
 * @param {string} num the number as a string.
 */
export function padSingleDigits(num: string | number): string {
  const rawNum = typeof num === 'string' ? Number(num) : num;
  return rawNum < 10 ? '0' + rawNum : '' + rawNum;
}
/**
 * isCommonDate returns if the given date is in the common date format.
 * TODO: Implement
 * @export
 * @param {string} date the date we are checking
 * @returns {boolean} if the given date is in common date format
 */
export function isCommonDate(date: string): boolean {
  return RegExp('').test(date);
}
/**
 * fromCommonDate transforms the given common date string to a date object.
 * TODO: Implement
 * @export
 * @param {string} date the common date object.
 * @returns {Date}
 */
export function fromCommonDate(date: string): Date {
  if (isCommonDate(date)) {
    return new Date();
  }
  throw new Error('Date given is not valid!');
}
