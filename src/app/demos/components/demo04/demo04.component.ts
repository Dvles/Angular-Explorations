import { Component } from '@angular/core';

@Component({
  selector: 'app-demo04',
  standalone: false,
  templateUrl: './demo04.component.html',
  styleUrl: './demo04.component.css'
})
export class Demo04Component {
  public title : string = "Démonstration 04 : Les pipes";
  public today : Date = new Date();

  public userInput? : string;
}
