import { Observable } from 'rxjs/Observable';

/**
 * Any service that implements this service provides a sub-collection of
 * logs, for transactions made to the collection document.
 * TODO: define log type
 */
export interface LogService {
  getLogs(documentId: string): Observable<Array<any>>;
  addLog(documentId: string, log: any): any;
}
