import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/productModels';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss'],
})
export class AllProductsComponent implements OnInit {
  products: Product[] = [];
  // categories: string[] = [];
  loading: boolean = false;
  cartProducts: any[] = []; // local storage

  constructor(private service: ProductsService) {}

  ngOnInit(): void {
    this.getProducts();
    // this.getCategories()
  }

  async getProducts() {
    // this.loading = true
    this.products = await this.service.getAllProductsServ();
    console.log(this.products);
  }

  addToCart(event: any) {

    // console.log(event);
    
    if ('cart' in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem('cart')!);
      
      // check if product exist or not 
      let exist = this.cartProducts.find(
        item =>  item.item._id == event.item._id
      );
   
      if (exist) alert('Product is already in your cart');
      else {
        this.cartProducts.push(event);
        localStorage.setItem('cart', JSON.stringify(this.cartProducts));
      }
    } else {
      this.cartProducts.push(event);
      localStorage.setItem('cart', JSON.stringify(this.cartProducts));
    }
  }

  // async getCategories() {
  //   this.loading = true
  //   this.products = await this.service.getAllCategories()

  //   this.loading = false

  // }

  // async getProductsCategory(keyword:string) {
  //   this.loading = true
  //  this.products = await this.service.getProductsByCategory(keyword)
  //     this.loading = false

  // }

  // filterCategory(event:any) {
  //   let value = event.target.value;
  //  (value == "all") ? this.getProducts() : this.getProductsCategory(value)

  // }
}
