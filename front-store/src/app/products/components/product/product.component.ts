import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../models/productModels';
import { ProductsService } from '../../services/products.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() data!:Product                
  @Output() item = new EventEmitter();    // from child to parent 

  addButton:boolean = false;
  amount:number = 0 ;  
  // baseApi:string = ''


  constructor() 
  { 
    // this.baseApi = environment.baseApi
  }

  ngOnInit(): void {
  }


  addProductToCart() {
    this.item.emit({item:this.data , quantity:this.amount })
    
  }
 

}
