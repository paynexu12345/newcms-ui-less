import { Component, OnInit, Output, EventEmitter, OnDestroy } from "@angular/core";
import { NgPopCarouselComponent } from "../carousel.component";
import { applyMixins } from '../../comp-utils';
import { ChildComponent } from '../../base';

@Component({
  selector: "ng-pop-carousel-item",
  templateUrl: "./carousel-item.component.html",
  styleUrls: ["./carousel-item.component.css"]
})
export class NgPopCarouselItemComponent extends ChildComponent implements OnInit, OnDestroy{
  constructor(public containerComp: NgPopCarouselComponent) {
    super();
  }
  ngOnInit() {
    this.containerComp.addChildComp(this);
  }
  ngOnDestroy() {
    this.containerComp.removeChildComp(this);
  }
}
