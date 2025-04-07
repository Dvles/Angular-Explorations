import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReverseTextPipe } from './pipes/reverse-text.pipe';
import { MathPowPipe } from './pipes/math-pow.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChronoFormatPipe } from './pipes/chrono-format.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { HiddingChildMenuDirective } from './directives/hidding-child-menu.directive';



@NgModule({
  declarations: [
    ReverseTextPipe,
    MathPowPipe,
    ChronoFormatPipe,
    HighlightDirective,
    HiddingChildMenuDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports :[
    ReverseTextPipe,
    MathPowPipe,
    ChronoFormatPipe,
    HighlightDirective,
    HiddingChildMenuDirective,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
