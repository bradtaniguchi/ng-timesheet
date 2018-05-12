export type LoggerLevel = 'LOG' | 'ERROR' | 'DEBUG';
export const LOGGER_LEVELS = {
  LOG: 'LOG',
  WARN: 'WARN',
  ERROR: 'ERROR',
  DEBUG: 'DEBUG'
};
export interface LoggerOptions {
  level?: LoggerLevel;
  timeStamp?: boolean;
  user?: boolean;
  spacer?: string;
}
export const DEFAULT_LOGGER_OPTIONS = {
  level: LOGGER_LEVELS.LOG,
  timeStamp: true,
  user: true,
  spacer: ''
};

export interface LoggerInterface {
  log(message: string, options: LoggerOptions);
  error(message: string, options: LoggerOptions);
}
