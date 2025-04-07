import { Injectable } from '@angular/core';
import { IProduct } from '../models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ShopV2Service {

  public products : IProduct[] = [];
  constructor() { }

  public addProduct(productName: string): void{
    if(this.products.filter(v => v.name == productName).length > 0) throw new Error(`The product ${productName} is already registered.`);
    this.products.push({name : productName, quantity : 1});
  }

  public removeProduct(productName: string): void{
    if(this.products.filter(v => v.name == productName).length == 0) throw new Error(`The product ${productName} is not registered.`);
    this.products = this.products.filter(v => v.name != productName);
  }

  public addProductQuantity(productName: string, quantity: number = 1): void{
    if(quantity <= 0) throw new Error('The quantity must be greather than 0.');
    if(this.products.filter(v => v.name == productName).length == 0) throw new Error(`The product ${productName} is not registered.`);
    let product : IProduct = this.products.filter(v => v.name == productName)[0];
    product.quantity += quantity;
  }

  public subProductQuantity(productName: string, quantity: number = 1): void{
    if(quantity <= 0) throw new Error('The quantity must be greather than 0.');
    if(this.products.filter(v => v.name == productName).length == 0) throw new Error(`The product ${productName} is not registered.`);
    let product : IProduct = this.products.filter(v => v.name == productName)[0];
    if(quantity > product.quantity) throw new Error(`Quantity to substract is greather than product's quantity`)
    product.quantity -= quantity;
    if(product.quantity == 0) this.removeProduct(productName);
  }
}
