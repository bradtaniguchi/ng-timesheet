import { Observable } from 'rxjs/Observable';
export class SearchBarStoreServiceStub {
  constructor() { }
  isSearchShown() {
    return Observable.of(true);
  }
}
