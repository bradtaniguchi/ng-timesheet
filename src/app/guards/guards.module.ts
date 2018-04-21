import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './auth.guard';
import { TimesheetViewGuard } from './timesheet-view.guard';

@NgModule({
  imports: [CommonModule]
})
export class GuardsModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: GuardsModule,
      providers: [AuthGuard, TimesheetViewGuard]
    };
  }
}
