import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { PositionType, HEADER_HEIGHT, BaseComponent } from '../base';
import { fadeInDownFactory } from '../../animations';
declare var $;
const fadeInDown = fadeInDownFactory();
@Component({
  selector: 'ng-pop-popup-layer',
  templateUrl: './popup-layer.component.html',
  styleUrls: ['./popup-layer.component.less'],
  animations: [fadeInDown]
})
export class NgPopPopupLayerComponent extends BaseComponent implements OnInit{

  constructor() { 
    super();
  }
  isVisible = false;
  direction: PositionType = "downLeft";
  maxHeight = "500px";
  @ViewChild("element") scrollElement: ElementRef;
  @ViewChild("element") element: ElementRef;
  setMaxHeight() {
    const pos = this.scrollElement.nativeElement.getBoundingClientRect();
    const winHeight = $(window).height();
    if (this.direction == "downLeft" || this.direction == "downRight"){
      this.maxHeight = winHeight - pos.top - 20 + "px";
    } else {
      this.maxHeight = pos.top - HEADER_HEIGHT - 40 + "px";
    }
    
    
  }
  setPosition() {
    const pos = this.element.nativeElement.getBoundingClientRect();
    if (pos.left + this.element.nativeElement.offsetWidth > window.innerWidth) {
      if (
        pos.top + this.element.nativeElement.offsetHeight <=
        window.innerHeight
      ) {
        this.direction = "downRight";
      } else {
        if ( pos.top > window.innerHeight / 2) {
          this.direction = "upRight";
        } else {
          this.direction = "downRight";
        }
        
      }
    } else {
      if (
        pos.top + this.element.nativeElement.offsetHeight >
        window.innerHeight
      ) {
        this.direction = "upLeft";
      } else {
        if ( pos.top > window.innerHeight / 2) {
          this.direction = "upLeft";
        } else {
          this.direction = "downLeft";
        }
      }
    }
  }
  setVisible() {
    this.isVisible = true;
  }
  @HostListener("mousewheel", ["$event"])
  onmousewheel($event) {
    $event.stopPropagation();
  }
  @HostListener("window:resize", ["$event"])
  onwindowresize($event) {
    this.setMaxHeight();
  }
  ngOnInit() {
    setTimeout(() => {
      this.setPosition();
      this.setMaxHeight();
      this.setVisible();
    }, 200);
  }

}
