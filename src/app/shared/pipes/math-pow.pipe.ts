import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mathPow',
  standalone: false
})
export class MathPowPipe implements PipeTransform {

  transform(value: number, power: number = 2): number {
    return Math.pow(value,power);
  }

}
