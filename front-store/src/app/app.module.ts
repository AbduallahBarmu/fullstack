import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';

// material UI
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartsModule } from './carts/carts.module';
import { ProductsModule } from './products/products.module';
import { AddProductFormComponent } from './admin/components/add-product-form/add-product-form.component';
import { AuthComponent } from './auth/components/auth/auth.component';


@NgModule({
  declarations: [
    AppComponent,
    AddProductFormComponent,
    AuthComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductsModule,
    CartsModule,
    SharedModule,
    BrowserAnimationsModule, 
    ReactiveFormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
