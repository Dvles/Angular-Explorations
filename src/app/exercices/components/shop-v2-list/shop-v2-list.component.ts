import { Component } from '@angular/core';
import { ShopV2Service } from '../../services/shop-v2.service';
import { IProduct } from '../../models/iproduct';

@Component({
  selector: 'app-shop-v2-list',
  standalone: false,
  templateUrl: './shop-v2-list.component.html',
  styleUrl: './shop-v2-list.component.css'
})
export class ShopV2ListComponent {
  public shopList? : IProduct[];

  constructor(private _shopService : ShopV2Service){
    this.shopList = this._shopService.products;
  }

  public onRemove(productName : string) : void{
    this._shopService.removeProduct(productName);
    this.shopList = this._shopService.products;
  }
  
  public onSub(productName : string) : void{
    this._shopService.subProductQuantity(productName);
    this.shopList = this._shopService.products;
  }
  public onAdd(productName : string) : void{
    this._shopService.addProductQuantity(productName);
    this.shopList = this._shopService.products;
  }
}
