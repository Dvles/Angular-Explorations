import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MathDemoService {
  public nb1? : number;
  public nb2? : number;
  public operator? : string;
  public result?: number;

  constructor() {}

  public square(nb: number): number {
    return nb * nb;
  }

  public operate() {
    if(!this.nb1) throw new Error('No nb1');
    if(!this.nb2) throw new Error('No nb2');
    switch (this.operator) {
      case '+':
        this.result = this.nb1 + this.nb2;
        break;
      case '-':
        this.result = this.nb1 - this.nb2;
        break;
      case '/':
        this.result = this.nb1 / this.nb2;
        break;
      case '*':
        this.result = this.nb1 * this.nb2;
        break;
      default :
        throw new Error('Operator invalid.');
    }
  }
}
