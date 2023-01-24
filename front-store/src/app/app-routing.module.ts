import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './carts/components/cart/cart.component';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { ProductsDetailsComponent } from './products/components/products-details/products-details.component';
import { AuthComponent } from './auth/components/auth/auth.component';
import { HomeComponent } from './home/home.component';
import { AdminGuardService } from './auth/services/admin-guard.service';


const routes: Routes = [
  {path:"home" , component: HomeComponent},
  {path:"products" , component:AllProductsComponent},
  {path:"details/:id" , component:ProductsDetailsComponent},
  {path:'cart' , component:CartComponent},

  {path:'auth', component:AuthComponent},
  {path:'dashboard', loadChildren: () => import('./admin/components/dashboard/dashboard.module').then(m => m.DashboardModule) , canActivate:[AdminGuardService]},
  {path:'addform', loadChildren: () => import('./admin/components/add-product-form/add-product-form.module').then(m => m.AddProductFormModule), canActivate:[AdminGuardService]},
  {path:'updateProduct/:id', loadChildren: () => import('./admin/components/add-product-form/add-product-form.module').then(m => m.AddProductFormModule), canActivate:[AdminGuardService]},
  
  {path:'',redirectTo:"HomeComponent", pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
