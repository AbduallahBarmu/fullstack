import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { SharedModule } from '../shared/shared.module';
import { CartsService } from './services/carts.service';

@NgModule({
  declarations: [CartComponent],
  imports: [CommonModule, SharedModule],
  providers: [CartsService],
})
export class CartsModule {}
