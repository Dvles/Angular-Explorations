import { Component } from '@angular/core';
import { ShopV2Service } from '../../services/shop-v2.service';

@Component({
  selector: 'app-shop-v2-add-product',
  standalone: false,
  templateUrl: './shop-v2-add-product.component.html',
  styleUrl: './shop-v2-add-product.component.css'
})
export class ShopV2AddProductComponent {
  public productName? : string;

  constructor(private _shopService : ShopV2Service){

  }

  public addProduct() : void{
    if(!this.productName) throw new Error('The product name is required.');
    this._shopService.addProduct(this.productName);
    this.productName = undefined;
  }
}
