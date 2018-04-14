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
// rxjs prototypes
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/observable/merge';
import { DefaultQueryConfig, DEFAULT_QUERY_CONFIG } from './constants/default-query-config';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    // service worker
    ServiceWorkerModule.register('ngsw-config.json', {enabled: environment.production}),
    // firebase, when ready
    AngularFireModule.initializeApp(environment.firebase),

    // app modules
    ServicesModule.forRoot(),
    ConstantsModule,
    GuardsModule,

    LandingModule,
    TimesheetModule,
    TimesheetListModule,
    SidenavModule,
    NavbarModule,
    CreateFabModule,
    CurrentUserProfileModule,

    // angular modules
    MatSidenavModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    {
      provide: DEFAULT_QUERY_CONFIG,
      useValue: DefaultQueryConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
