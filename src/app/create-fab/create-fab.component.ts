import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { CreateFabService } from './create-fab.service';

@Component({
  selector: 'app-create-fab',
  templateUrl: './create-fab.component.html',
  styles: []
})
export class CreateFabComponent implements OnInit, OnDestroy {
  click = new Subject();
  private takeUntil = new Subject();
  constructor(
    private createFabService: CreateFabService
  ) { }

  ngOnInit() {
    this.click.subscribe(() => this.createFabService.emitClick());
  }
  ngOnDestroy() {
    this.takeUntil.next();
    this.takeUntil.unsubscribe();
  }

}
