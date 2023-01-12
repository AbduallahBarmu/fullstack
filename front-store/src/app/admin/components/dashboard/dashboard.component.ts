import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';


// import { FormBuilder, FormGroup, Validators} from '@angular/forms';

import { ProductsService } from '../../../products/services/products.service';
import { Product } from '../../../products/models/productModels';
import { AdminService } from '../../admin.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})



export class DashboardComponent implements OnInit {
  
  products: Product[] = [];   // interface
  // base64:any='';

  
  @Output() newProductEvent = new EventEmitter<Product[]>(); 

  
  constructor(
    private service: ProductsService,
    private adminService: AdminService,
    // private build:FormBuilder
  ) {}

  ngOnInit(): void {
    this.getProducts();

  }


  async getProducts() {
    this.products = await this.service.getAllProductsServ();
  }

  

  async deleteProduct(_id: number) {
    this.products = await this.adminService.deleteProductServ(_id);
    await this.getProducts(); // display products after deleteing the product record
  }

  



}
