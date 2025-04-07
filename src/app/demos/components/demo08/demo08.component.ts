import { formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-demo08',
  standalone: false,
  templateUrl: './demo08.component.html',
  styleUrl: './demo08.component.css'
})
export class Demo08Component {

  public myForm : FormGroup

  constructor(private _formBuilder : FormBuilder){
    this.myForm = this._formBuilder.group({
      firstName : [null, [Validators.required]],
      lastName : [null, [Validators.required]],
      birthDate : [ formatDate(new Date(), 'yyyy-MM-dd','en'), [Validators.required]],
      guests : this._formBuilder.array([])
    });
  }

  public onSubmit() : void{
    console.log(this.myForm);
  }

  public getGuestsArray() : FormArray {
    return this.myForm.get('guests') as FormArray;
  }
}
