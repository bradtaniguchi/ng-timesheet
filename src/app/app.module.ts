import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LandingModule } from './landing/landing.module';
import { TimesheetModule } from './timesheet/timesheet.module';
import { TimesheetListModule } from './timesheet-list/timesheet-list.module';
import { NavbarModule } from './navbar/navbar.module';
import { SidenavModule } from './sidenav/sidenav.module';
import { MatSidenavModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    // app modules
    LandingModule,
    TimesheetModule,
    TimesheetListModule,
    NavbarModule,
    SidenavModule,

    // angular modules
    MatSidenavModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
