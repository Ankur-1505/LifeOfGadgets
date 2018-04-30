import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CarsComponent } from './cars/cars.component';
import { WatchesComponent } from './watches/watches.component';
import { PhonesComponent } from './phones/phones.component';
import { LazyloadingComponent } from './lazyloading/lazyloading.component';




const routes: Routes = [  
  {
    path: 'home',
    component : HomeComponent
  },
{
    path:'cars',
    component: CarsComponent
  },
  {
    path:'watches',
    component: WatchesComponent
  },
  {
    path:'phones',loadChildren:'./phones/phones.module#PhonesModule'
  },
  {
    path:'lazy',loadChildren:'./lazyloading/lazyloading.module#LazyloadingModule'
  },

  
  
  

 
  



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
