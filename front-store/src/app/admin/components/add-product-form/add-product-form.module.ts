import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddProductFormRoutingModule } from './add-product-form-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AddProductFormRoutingModule,
    SharedModule,
    FormsModule,
    HttpClientModule

  ]
})
export class AddProductFormModule { }
