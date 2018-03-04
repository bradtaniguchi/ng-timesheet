export class AngularFirestoreMock {
  _mockCollections = {
    'timesheets': []
  };
  constructor() { }

  collection<T>(collection: string): any {
    return  this._mockCollections;
  }
}
