import { Component } from '@angular/core';

@Component({
  selector: 'app-exo-chrono',
  standalone: false,
  templateUrl: './exo-chrono.component.html',
  styleUrl: './exo-chrono.component.css'
})
export class ExoChronoComponent {
  public nbSeconds : number = 0;
  public fonctionChrono : any = undefined;


  public onStart() : void{
    if(this.fonctionChrono) throw new Error('Already running...');
    this.fonctionChrono = setInterval(
      () => this.addSecond(),
      1000
    );
  }

  private addSecond(): void{
    this.nbSeconds++;
  }

  public onPause() : void{
    if(!this.fonctionChrono) throw new Error('No chrono running...');
    clearInterval(this.fonctionChrono);
    this.fonctionChrono = undefined;
  }

  public onReset() : void{
    if(this.nbSeconds == 0) throw new Error('Already at initial value...');    
    if(this.fonctionChrono) this.onPause();
    this.nbSeconds = 0;
  }
}
