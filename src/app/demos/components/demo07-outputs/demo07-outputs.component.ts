import { Component } from '@angular/core';
import { MathDemoService } from '../../services/math-demo.service';

@Component({
  selector: 'app-demo07-outputs',
  standalone: false,
  templateUrl: './demo07-outputs.component.html',
  styleUrl: './demo07-outputs.component.css'
})
export class Demo07OutputsComponent {
  public result? : number;
  
  constructor(private _mathService : MathDemoService){

  }

  public onEqual() : void{
    this._mathService.operate()
    this.result = this._mathService.result;
  }

}
