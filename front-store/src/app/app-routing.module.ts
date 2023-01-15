import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './carts/components/cart/cart.component';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { ProductsDetailsComponent } from './products/components/products-details/products-details.component';
import { AuthComponent } from './auth/components/auth/auth.component';


const routes: Routes = [
  {path:"products" , component:AllProductsComponent},
  {path:"details/:id" , component:ProductsDetailsComponent},
  {path:'cart' , component:CartComponent},
  {path:'auth', component:AuthComponent},

  {path:'dashboard', loadChildren: () => import('./admin/components/dashboard/dashboard.module').then(m => m.DashboardModule)},
  {path:'addform', loadChildren: () => import('./admin/components/add-product-form/add-product-form.module').then(m => m.AddProductFormModule)},
  {path:'updateProduct/:id', loadChildren: () => import('./admin/components/add-product-form/add-product-form.module').then(m => m.AddProductFormModule)}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
