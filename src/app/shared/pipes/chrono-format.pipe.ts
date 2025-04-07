import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'chronoFormat',
  standalone: false
})
export class ChronoFormatPipe implements PipeTransform {

  transform(value: number): string {
    let minutes : number = Math.floor(value / 60);
    let seconds : number = value % 60;
    return `${minutes} ${this.setPlural('minute',minutes)} ${this.twoValueNumber(seconds)} ${this.setPlural('seconde',seconds)}`;
  }

  private twoValueNumber(value : number) : string{
    return `${(value < 10)? '0' : ''}${value}`;
  }

  private setPlural(text: string, count : number) : string{
    return `${text}${(count>1)?'s':''}`;
  }

}
