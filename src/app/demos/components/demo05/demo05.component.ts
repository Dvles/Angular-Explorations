import { Component } from '@angular/core';

@Component({
  selector: 'app-demo05',
  standalone: false,
  templateUrl: './demo05.component.html',
  styleUrl: './demo05.component.css'
})
export class Demo05Component {
  public stock : number = 10;

  public roundPercent : number = 10;

  public selectedNumber : number = 0;

  public caseCochee : boolean = true;

  public list : string[] = [
    "Directive de composant",
    "Directive structurelle",
    "Directive d'attribut"
  ];
  public newUserValue? : string;

  public nbList : number[] = [1,2,3,4,5,6,7,8,9,10];

  public subStock() : void{
    if(this.stock > 0) this.stock--;
  }

  public addNewUserValue() : void{
    if(!this.newUserValue) throw new Error(`The value is not valid...`);
    this.list.push(this.newUserValue);
    this.newUserValue = undefined;
  }

  public subUserValue(value : string) : void{
    if(this.list.filter(v => v == value).length == 0) throw new Error(`The value ${value} is not in the list...`);
    this.list = this.list.filter( v => v != value);
  }

  public subUserIndex(index: number) : void{
    if(index < 0) throw new Error(`The index ${index} must be equals or greather than 0...`);
    if(index >= this.list.length) throw new Error(`The index ${index} is not in the list...`);
    this.list.splice(index,1);
  }
}
