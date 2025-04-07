import { Component } from '@angular/core';
import { MathDemoService } from '../../services/math-demo.service';

@Component({
  selector: 'app-demo07-inputs',
  standalone: false,
  templateUrl: './demo07-inputs.component.html',
  styleUrl: './demo07-inputs.component.css'
})
export class Demo07InputsComponent {
  public nb1? : number;
  public nb2? : number;

  constructor(private _mathService : MathDemoService){
  }

  public saveNb1():void{
    this._mathService.nb1 = this.nb1;
  }
  public saveNb2():void{
    this._mathService.nb2 = this.nb2;
  }  
  public onPlus() : void{
    this._mathService.operator = '+';
  }
  public onSub() : void{
    this._mathService.operator = '-';
  }
  public onDivide() : void{
    this._mathService.operator = '/';
  }
  public onMultiply() : void{
    this._mathService.operator = '*';
  }
}
