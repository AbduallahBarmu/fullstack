import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/productModels';


@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss']
})
export class ProductsDetailsComponent implements OnInit {

  id:any
  data:any ={} 
  loading:boolean = false; 
  
  
  
  constructor(private route:ActivatedRoute , private service:ProductsService){
    // we catch the ID of the product item  
    this.id = this.route.snapshot.paramMap.get("id")   
    console.log(this.id) 
  }
  
  
  ngOnInit(): void {
    
    this.getProductById()
  }


  // send Id to the URL 
 async getProductById(){
  this.loading = true
  this.data = await this.service.getProductByIdServ(this.id)
  this.loading = false

 }
}
