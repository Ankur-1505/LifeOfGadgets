import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{ PhonesComponent} from './phones.component';
import{Routes,RouterModule } from '@angular/router';


const routes:Routes=[
  {path:'',component:PhonesComponent }
]



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: []
})
export class PhonesModule { }
