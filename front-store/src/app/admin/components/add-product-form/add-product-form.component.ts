import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from '../../../products/models/productModels';
import { AdminService } from '../../admin.service';
import { ProductsService } from 'src/app/products/services/products.service';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-product-form',
  templateUrl: './add-product-form.component.html',
  styleUrls: ['./add-product-form.component.scss'],
})
export class AddProductFormComponent {
  products: Product[] = []; // interface
  data: any = {};
  form!: FormGroup;
  id: any;

  constructor(
    private route: ActivatedRoute,
    private adminService: AdminService,
    private service: ProductsService
  ) {}

  async ngOnInit() {
    // this.form = new FormGroup();

    this.id = this.route.snapshot.paramMap.get('id');

    this.data = this.id ? await this.service.getProductByIdServ(this.id) : {};
  }



  async addProduct(form: NgForm) {
    console.log(' product submitted', form);
    if (this.id) {
      await this.adminService.updateProductServ(this.id , form);
    } else {
      this.products = await this.adminService.createProductServ(form);
    }
    alert('Great !! The product add successfully');
  }


  
  // getProductById() {
  //    this.service.getProductByIdServ(this.id).subscribe((res: any) => {
  //     console.log('res',res)
  //    this.data = res
  //    console.log(this.data)
  //   });

  // }
  //   async getProductById() {
  //    this.data=  await this.service.getProductByIdServ(this.id)

  //  }
}
