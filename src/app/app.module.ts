import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CarsComponent } from './cars/cars.component';
import { WatchesComponent } from './watches/watches.component';
import { PhonesComponent } from './phones/phones.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarsComponent,
    WatchesComponent,
    PhonesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
