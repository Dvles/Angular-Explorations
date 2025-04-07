import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseText',
  standalone: false
})
export class ReverseTextPipe implements PipeTransform {

  transform(value: string | undefined): string | undefined {
    if(!value) return value;
    return value.split('').reverse().join('');
  }

}
