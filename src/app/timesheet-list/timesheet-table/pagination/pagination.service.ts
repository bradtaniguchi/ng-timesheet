import { tap, scan, take } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from 'angularfire2/firestore';
import { BehaviorSubject, Observable } from 'rxjs';
// import 'rxjs/add/operator/do';
// import 'rxjs/add/operator/scan';
// import 'rxjs/add/operator/take';
import { Timesheet } from '../../../interfaces/timesheet';

// TOTALLY jacked from this page:
// https://angularfirebase.com/lessons/infinite-scroll-firestore-angular/
@Injectable()
export class PaginationService {
  // Source data
  private _done = new BehaviorSubject(false);
  // private _loading = new BehaviorSubject(false);
  private _data = new BehaviorSubject([]);

  private query: any;

  // Observable data
  data: Observable<Array<Timesheet>>;
  done: Observable<boolean> = this._done.asObservable();
  // loading: Observable<boolean> = this._loading.asObservable();

  constructor(private afs: AngularFirestore) {}

  // Initial query sets options and defines the Observable
  // passing opts will override the defaults
  init(path: string, field: string, opts?: any) {
    this.query = {
      path,
      field,
      limit: 2,
      reverse: false,
      prepend: false,
      ...opts
    };

    const first = this.afs.collection(this.query.path, ref => {
      return ref
        .orderBy(this.query.field, this.query.reverse ? 'desc' : 'asc')
        .limit(this.query.limit);
    });

    this.mapAndUpdate(first);

    // Create the observable array for consumption in components
    this.data = this._data.asObservable().pipe(
      scan((acc, val) => {
        return this.query.prepend ? val.concat(acc) : acc.concat(val);
      })
    );
  }

  // Retrieves additional data from firestore
  more() {
    const cursor = this.getCursor();

    const more = this.afs.collection(this.query.path, ref => {
      return ref
        .orderBy(this.query.field, this.query.reverse ? 'desc' : 'asc')
        .limit(this.query.limit)
        .startAfter(cursor);
    });
    this.mapAndUpdate(more);
  }

  // Determines the doc snapshot to paginate query
  private getCursor() {
    const current = this._data.value;
    if (current.length) {
      return this.query.prepend
        ? current[0].doc
        : current[current.length - 1].doc;
      // return this.query.prepend ? current[0] : current[current.length - 1];
    }
    return null;
  }

  // Maps the snapshot to usable format the updates source
  private mapAndUpdate(col: AngularFirestoreCollection<any>) {
    if (this._done.value) {
      return;
    }

    // loading
    // this._loading.next(true);

    // Map snapshot with doc ref (needed for cursor)
    return col
      .snapshotChanges()
      .pipe(
        tap(arr => {
          let values = arr.map(snap => {
            const data = snap.payload.doc.data();
            const doc = snap.payload.doc;
            return { ...data, doc };
          });

          // If prepending, reverse the batch order
          values = this.query.prepend ? values.reverse() : values;

          // update source with new values, done loading
          this._data.next(values);
          // this._loading.next(false);

          // no more values, mark done
          if (!values.length) {
            this._done.next(true);
          }
        })
      )
      .pipe(take(1))
      .subscribe();
  }
}
