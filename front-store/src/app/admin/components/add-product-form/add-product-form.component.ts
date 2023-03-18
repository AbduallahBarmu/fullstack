import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../products/models/productModels';
// services
import { AdminService } from '../../services/admin.service';
import { ProductsService } from 'src/app/products/services/products.service';
import { firstValueFrom } from 'rxjs';
import { FormGroup } from '@angular/forms';

import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-add-product-form',
  templateUrl: './add-product-form.component.html',
  styleUrls: ['./add-product-form.component.scss'],
})
export class AddProductFormComponent {
  products: Product[] = []; // Interface
  data: any = {};
  image: any;
  form!: FormGroup;
  id: string | null = '';

  constructor(
    private route: ActivatedRoute,
    private adminService: AdminService,
    private service: ProductsService,
    private router: Router,
    private http: HttpClient
  ) {}

  async ngOnInit() {
    // this root is to get product id by using params
    this.id = this.route.snapshot.paramMap.get('id');
    // get the data and check if there is an ID  give me the data of this ID(Edit method) if not return an empty object (Add method)
    this.data = this.id ? await this.service.getProductByIdServ(this.id) : {};
    console.log('data obj' + this.data);
  }

  async addProduct(form: any) {
    if (this.image) {
      const res = await this.uploadFileService();
      form.image = environment.baseApi + res.data;
    }

    if (this.id) {
      // in case there is an ID means we have data in the form so, lets update it
      await this.adminService.updateProductServ(this.id, form);
      // redirect router inot dashbord page
      this.router.navigate(['/dashboard']);
      alert('Great !! The product Updated successfully');
    } else {
      // in case there is no ID means the form is empty and we will create new product
      this.products = await this.adminService.createProductServ(form);
      // redirect router inot dashbord page
      this.router.navigate(['/dashboard']);
      alert('Great !! The product Added successfully');
    }
  }

  async onFileSelected(event: any) {
    console.log(event);

    this.image = event.target.files[0];
    //  return await this.adminService.uploadFileService()
  }

  uploadFileService(): Promise<any> {
    const formData = new FormData();
    formData.append('file', this.image);
    return firstValueFrom(
      this.http.post<any>(environment.baseApi + 'products/upload', formData)
    );
  }
}
