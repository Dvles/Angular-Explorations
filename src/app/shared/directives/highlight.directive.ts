import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: false
})
export class HighlightDirective {

  private _elementStyle : any;

  constructor(private _htmlElement : ElementRef) { 
    this._elementStyle = this._htmlElement.nativeElement.style;
  }

  @HostListener('mouseover')
  public onMouseOver() : void{
    this._htmlElement.nativeElement.style.backgroundColor = 'yellow';
    this._htmlElement.nativeElement.style.fontWeight = 'bolder';
  }

  @HostListener('mouseleave')
  public onMouseLeave() : void{
    this._htmlElement.nativeElement.style = this._elementStyle;
  }

}
