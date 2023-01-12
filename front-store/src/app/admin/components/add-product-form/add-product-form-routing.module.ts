import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddProductFormComponent} from './add-product-form.component'


const routes: Routes = [
  {path:'', component:AddProductFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddProductFormRoutingModule { }
