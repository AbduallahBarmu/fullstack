import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddProductFormRoutingModule } from './add-product-form-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule} from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AddProductFormRoutingModule,
    SharedModule,
    FormsModule

  ]
})
export class AddProductFormModule { }
