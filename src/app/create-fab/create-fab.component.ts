import {
  Component,
  OnInit,
  OnDestroy,
  Output,
  EventEmitter
} from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { CreateFabService } from './create-fab.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-create-fab',
  templateUrl: './create-fab.component.html',
  styles: []
})
export class CreateFabComponent implements OnInit, OnDestroy {
  @Output() click = new EventEmitter();
  private takeUntil = new Subject();
  constructor(private createFabService: CreateFabService) {}

  ngOnInit() {
    this.click
      .pipe(takeUntil(this.takeUntil))
      .subscribe(() => this.createFabService.emitClick());
  }
  ngOnDestroy() {
    this.takeUntil.next();
    this.takeUntil.unsubscribe();
  }
}
