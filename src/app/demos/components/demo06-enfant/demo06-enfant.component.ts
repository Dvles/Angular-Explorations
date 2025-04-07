import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IStudent } from '../../models/istudent';

@Component({
  selector: 'app-demo06-enfant',
  standalone: false,
  templateUrl: './demo06-enfant.component.html',
  styleUrl: './demo06-enfant.component.css'
})
export class Demo06EnfantComponent {
  @Input()
  public student! : IStudent;

  @Output()
  public passTopOneEmitter: EventEmitter<IStudent>;

  constructor(){
    this.passTopOneEmitter = new EventEmitter<IStudent>;
  }

  public onTop(): void{
    this.passTopOneEmitter.next(this.student);
  }
}
