import { Component } from '@angular/core';

@Component({
  selector: 'app-demo03',
  standalone: false,
  templateUrl: './demo03.component.html',
  styleUrl: './demo03.component.css'
})

export class Demo03Component {

  public title : string = 'Démonstration 03 : Le binding de propriétés';
  public numPage : number = 34;

  public userInput : string = 'Veuillez introduire un mot';

  public count: number = 0;

  public AddCount() : void{
    this.count++;
  }
}
