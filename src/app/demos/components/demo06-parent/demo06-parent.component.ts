import { Component } from '@angular/core';
import { IStudent } from '../../models/istudent';

@Component({
  selector: 'app-demo06-parent',
  standalone: false,
  templateUrl: './demo06-parent.component.html',
  styleUrl: './demo06-parent.component.css'
})
export class Demo06ParentComponent {
  public students : IStudent[] = [
    {first_name : 'Michael', last_name : 'J Fox'},
    {first_name : 'Christopher', last_name : 'Loyd'},
    {first_name : 'Sam', last_name : 'Neil'},
    {first_name : 'Sandra', last_name : 'Bullock'},
    {first_name : 'Laura', last_name : 'Dern'}
  ]

  public passToTopOne(student: IStudent) : void{
    let index : number = this.students.indexOf(student);
    if( index == -1 ) throw new Error(`This student is not in the list...`);
    this.students.splice(index,1);
    this.students.unshift(student);
  }
}
