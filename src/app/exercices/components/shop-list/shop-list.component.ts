import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-shop-list',
  standalone: false,
  templateUrl: './shop-list.component.html',
  styleUrl: './shop-list.component.css'
})
export class ShopListComponent {
  @Input()
  public shopList! : string[];

  @Output()
  public productRemoveEmitter : EventEmitter<string>;

  constructor(){
    this.productRemoveEmitter = new EventEmitter<string>();
  }

  public onRemove(productName : string):void{
    this.productRemoveEmitter.next(productName);
  }
}
