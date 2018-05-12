import { of as observableOf, Observable } from 'rxjs';
export class SearchBarStoreServiceStub {
  constructor() {}
  isSearchShown() {
    return observableOf(true);
  }
}
