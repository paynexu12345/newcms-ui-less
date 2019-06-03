import { Component, OnInit, Output, EventEmitter, OnDestroy } from "@angular/core";
import { NgPopCarouselComponent } from "../carousel.component";
import { SubComponent } from '../../base';

@Component({
  selector: "ng-pop-carousel-item",
  templateUrl: "./carousel-item.component.html",
  styleUrls: ["./carousel-item.component.css"]
})
export class NgPopCarouselItemComponent extends SubComponent implements OnInit, OnDestroy{
  constructor(public containerComp: NgPopCarouselComponent) {
    super();
  }
  ngOnInit() {
    this.containerComp.addMainSubComp(this);
  }
  ngOnDestroy() {
    this.containerComp.removeMainSubComp(this);
  }
}
