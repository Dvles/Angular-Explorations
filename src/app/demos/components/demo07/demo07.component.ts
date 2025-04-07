import { Component } from '@angular/core';
import { MathDemoService } from '../../services/math-demo.service';

@Component({
  selector: 'app-demo07',
  standalone: false,
  templateUrl: './demo07.component.html',
  styleUrl: './demo07.component.css'
})
export class Demo07Component {
  public nb? : number;
  public squareResult? : number;

  constructor(private _mathService : MathDemoService){

  }

  public serviceSquare() : void{
    if(!this.nb) throw new Error('You must fill a value.');
    this.squareResult = this._mathService.square(this.nb);
  }
}
