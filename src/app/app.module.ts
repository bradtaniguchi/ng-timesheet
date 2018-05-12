import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LandingModule } from './landing/landing.module';
import { TimesheetModule } from './timesheet/timesheet.module';
import { TimesheetListModule } from './timesheet-list/timesheet-list.module';
import { SidenavModule } from './sidenav/sidenav.module';
import { MatSidenavModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServicesModule } from './services/services.module';
import { GuardsModule } from './guards/guards.module';
import { NavbarModule } from './navbar/navbar.module';
import { CreateFabModule } from './create-fab/create-fab.module';
import { CurrentUserProfileModule } from './current-user-profile/current-user-profile.module';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { ConstantsModule } from './constants/constants.module';
import { ServiceWorkerModule } from '@angular/service-worker';

import { Angulartics2Module } from 'angulartics2';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';

import { Page404Module } from './page-404/page-404.module';
import {
  DefaultQueryConfig,
  DEFAULT_QUERY_CONFIG
} from './constants/default-query-config';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    // service worker
    ServiceWorkerModule.register('ngsw-config.json', {
      enabled: environment.production
    }),
    // firebase, when ready
    AngularFireModule.initializeApp(environment.firebase),

    // angulartics module
    Angulartics2Module.forRoot([Angulartics2GoogleAnalytics]),

    // app modules
    ServicesModule.forRoot(),
    GuardsModule.forRoot(),
    ConstantsModule,

    LandingModule,
    TimesheetModule,
    TimesheetListModule,
    SidenavModule,
    NavbarModule,
    CreateFabModule,
    CurrentUserProfileModule,
    Page404Module,

    // angular modules
    MatSidenavModule
  ],
  declarations: [AppComponent],
  providers: [
    {
      provide: DEFAULT_QUERY_CONFIG,
      useValue: DefaultQueryConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
