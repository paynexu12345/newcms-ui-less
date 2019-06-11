import {Directive, Input, HostListener, ElementRef} from '@angular/core';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: 'img[ngPopImageLoadErrorHandler]'
})
export class NgPopImageLoadErrorHandlerDirective
{
  constructor(public elementRef: ElementRef) {}
  flag = false;
  loadFailedSrc = "./assets/unavailable.jpg"
  @Input("ngPopImageLoadErrorHandler")
  set _loadFailedSrc(val)
  {
    if(val)
    {
      this.loadFailedSrc = val;
    }
  };

  @HostListener("error", ['$event'])
  onerror()
  {
    if(!this.flag)
    {
      this.elementRef.nativeElement.src = this.loadFailedSrc;
    }
    this.flag = true;
  }
}
