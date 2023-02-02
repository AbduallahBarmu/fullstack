import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { ProductsService } from '../../../products/services/products.service';
import { Product } from '../../../products/models/productModels';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  products: Product[] = []; // interface

  @Output() newProductEvent = new EventEmitter<Product[]>();

  constructor(
    private service: ProductsService,
    private adminService: AdminService
  ) {}

  ngOnInit(): void {
    this.getProducts();
  }

  async getProducts() {
    this.products = await this.service.getAllProductsServ();
  }

  async deleteProduct(_id: string) {
    await this.adminService.deleteProductServ(_id);
    await this.getProducts(); // display products after deleteing the product record
  }
}
