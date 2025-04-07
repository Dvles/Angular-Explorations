import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-shop-add-product',
  standalone: false,
  templateUrl: './shop-add-product.component.html',
  styleUrl: './shop-add-product.component.css'
})
export class ShopAddProductComponent {
  public productName? : string;

  @Output()
  public productNameEmitter : EventEmitter<string>;

  constructor(){
    this.productNameEmitter = new EventEmitter<string>();
  }

  public addProduct(): void{
    if(!this.productName || !this.productName.trim()) throw new Error(`The product must have a name...`);
    this.productNameEmitter.next(this.productName);
    this.productName = undefined;
  }
}
