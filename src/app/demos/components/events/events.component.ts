import { formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-events',
  standalone: false,
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent {

  public myForm : FormGroup

  constructor(private _formBuilder: FormBuilder) {
    this.myForm = this._formBuilder.group({
      name: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(16)]],
      description: [null, [Validators.maxLength(512)]],
      eventDate: [formatDate(new Date(), 'yyyy-MM-dd', 'en'), [Validators.required]],
      allDayEvent: [false],
      startTime: [null],
      endTime: [null]
    });
  }

  public onSubmit() : void{
    console.log(this.myForm);
    if(!this.myForm.valid) throw new Error('Formulaire invalide');
    console.log(JSON.stringify(this.myForm.value));
  }


}
