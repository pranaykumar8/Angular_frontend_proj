import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomdirectives]'
})
export class CustomdirectivesDirective {

  constructor(private _eleref: ElementRef) { 
    this._eleref.nativeElement.style.background="red";
  }

}
