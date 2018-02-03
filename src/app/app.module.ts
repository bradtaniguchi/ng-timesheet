import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LandingModule } from './landing/landing.module';
import { TimesheetModule } from './timesheet/timesheet.module';
import { TimesheetListModule } from './timesheet-list/timesheet-list.module';
import { NavbarModule } from './navbar/navbar.module';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    LandingModule,
    TimesheetModule,
    TimesheetListModule,
    NavbarModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
