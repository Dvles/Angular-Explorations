import { Component } from '@angular/core';

@Component({
  selector: 'app-shop',
  standalone: false,
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {
  public shopList : string[] = [];

  public addProductInShopList(productName : string):void{
    productName = productName.trim();
    if(this.shopList.filter(v => v == productName).length > 0) throw new Error(`The product '${productName}' is already in the list.`);
    this.shopList.push(productName);
  }

  public removeProductInShopList(productName : string):void{
    let index : number = this.shopList.indexOf(productName);
    if(index == -1) throw new Error(`The product '${productName}' isn't in th list.`);
    this.shopList.splice(index,1);
  }
}
