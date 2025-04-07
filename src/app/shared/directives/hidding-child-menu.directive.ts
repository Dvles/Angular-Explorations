import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHiddingChildMenu]',
  standalone: false
})
export class HiddingChildMenuDirective {

  constructor(private _htmlElement : ElementRef) { 
  }

  @HostListener('click')
  public onClick(): void{
    const html_childMenu = this._htmlElement.nativeElement.querySelector('ul.childMenu');
    html_childMenu.classList.toggle('hiddenMenu');
  }

}
