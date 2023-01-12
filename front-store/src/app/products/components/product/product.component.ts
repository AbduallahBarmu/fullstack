import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../models/productModels';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() data!:Product                
  @Output() item = new EventEmitter();   

  addButton:boolean = false;
  amount:number = 0 ;  



  constructor() { }

  ngOnInit(): void {
  }


  addProductToCart() {
    this.item.emit({item:this.data ,quantity:this.amount })
    alert("product added successfully")
  }
 
}
