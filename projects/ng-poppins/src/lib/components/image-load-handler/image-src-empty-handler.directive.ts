import {Directive, Input, ElementRef} from '@angular/core';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[ngPopImageEmptySrcHandler]'
})
export class NgPopImageSrcEmptyHandlerDirective
{
  constructor(public elementRef: ElementRef) {}
  defaultImage = './assets/unavailable.jpg';
  src = "";
  @Input("ngPopImageEmptySrcHandler")
  set _src(val)
  {
    if(val)
    {
      this.src = val;
      this.elementRef.nativeElement.src = val;
    }
    else
    {
      this.elementRef.nativeElement.src = this.defaultImage;
    }
  };
}
