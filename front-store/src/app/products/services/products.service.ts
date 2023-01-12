import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/productModels';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  item:any 


  constructor(private http:HttpClient) { }

    // first value from (rx) promise
  getAllProductsServ():Promise<Product[]> {
     return firstValueFrom(this.http.get<Product[]>(environment.baseApi +'products'))
  }

 
  getProductByIdServ(id:any):Promise<Product[]> {
    return firstValueFrom(
      this.http.get<Product[]>(environment.baseApi +'products/'+id) )
  }
  

  getAllCategories() {
    return this.http.get(environment.baseApi +'products/categories')
  }
  
  getProductsByCategory(keyword:string) {
    return this.http.get(environment.baseApi +'products/category/'+keyword)
  }

}
