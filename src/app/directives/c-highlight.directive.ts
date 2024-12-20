import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appCHighlight]'
})
export class CHighlightDirective {

  constructor() { }
@HostBinding('style.backgroundColor')c_color="red";
@HostListener('mouseenter')c_onenter(){
this.c_color='blue';
}
@HostListener('mouseleave')c_onleave(){
  this.c_color='yellow';
}
}
