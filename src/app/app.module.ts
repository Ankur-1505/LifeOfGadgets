
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CarsComponent } from './cars/cars.component';
import { WatchesComponent } from './watches/watches.component';
import { PhonesModule } from './phones.module';
import {PhonesComponent} from './phones/phones.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { MDBBootstrapModule } from 'angular-bootstrap-md';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarsComponent,
    WatchesComponent,
    PhonesComponent,
    
    

    // BOOTSTRAP directives for angular 
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PhonesModule,
    MDBBootstrapModule.forRoot()
    
    
    
  ],



  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }

