import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { firstValueFrom } from 'rxjs';
import { Product } from '../products/models/productModels';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private http: HttpClient) {}

  products: Product[] = [];

  createProductServ(form: any): Promise<Product[]> {
    return firstValueFrom(
      this.http.post<Product[]>(environment.baseApi + 'products', form)
    );
  }

  updateProductServ(id: string, product: any): Promise<Product[]> {
    return firstValueFrom(
      this.http.patch<Product[]>(
        environment.baseApi + 'products/' + id,
        product
      )
    );
  }

  deleteProductServ(id: number): Promise<Product[]> {
    console.log('delete');
    return firstValueFrom(
      this.http.delete<Product[]>(environment.baseApi + 'products/' + id)
    );
  }
}
