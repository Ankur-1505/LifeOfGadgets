import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CarsComponent} from './cars/cars.component';
import { WatchesComponent } from './watches/watches.component';
import { PhonesComponent } from './phones/phones.component';









const routes: Routes = [  
  {
    path: 'home',
    component : HomeComponent
  },
{
    path:'cars',
    component : CarsComponent
  },
  {
    path:'watches',
    component: WatchesComponent
  },
  {
    path : 'phones',
    component: PhonesComponent
  }
  
  

  
  
  

 
  



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
