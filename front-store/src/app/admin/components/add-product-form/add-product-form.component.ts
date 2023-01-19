import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../products/models/productModels';
// services
import { AdminService } from '../../admin.service';
import { ProductsService } from 'src/app/products/services/products.service';

import { FormGroup } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product-form',
  templateUrl: './add-product-form.component.html',
  styleUrls: ['./add-product-form.component.scss'],
})
export class AddProductFormComponent {
  products: Product[] = []; // Interface
  data: any = {};
  form!: FormGroup;
  id: any;
  // base64: any = '';
  // file?: File 
  
  shortLink: string = "";
  loading: boolean = false; // Flag variable
  

  constructor(
    private route: ActivatedRoute,
    private adminService: AdminService,
    private service: ProductsService,
    private router: Router
  ) {}

  async ngOnInit() {
    // this root is to get product id by using params
    this.id = this.route.snapshot.paramMap.get('id');
    // get the data and check if there is an ID  give me the data of this ID(Edit method) if not return an empty object (Add method)
    this.data = this.id ? await this.service.getProductByIdServ(this.id) : {};
  }

  async addProduct(form: NgForm) {
    console.log(' product submitted', form);
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
    // this.form.reset();
  }


  // getImagePath(event:any ){
  //   const file = event.target.files[0]
  //   const reader = new FileReader();
  //   reader.readAsDataURL(file)
  //   reader.onload= ()=>{
  //     this.base64 = reader.result
  //     this.form.get('image')?.setValue(this.base64)
  //     console.log(this.base64);
  //   }
  
  
    // this.file = <File> event.target.files[0].name // this path from event object in the console
    // // console.log(event.target.files[0].name);
    // this.service.uploadImage(this.file).subscribe(
    //   (event: any) => {
    //     if(typeof(event) === 'object'){
    //       //short link via api response 
    //       this.shortLink = event.link
    //     }
    //   }
    // )
  //}
}
