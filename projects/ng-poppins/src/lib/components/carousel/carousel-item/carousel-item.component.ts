import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { NgPopCarouselComponent } from "../carousel.component";
import { ChildComponent, Activatable } from "../../interfaces";
import { applyMixins } from '../../comp-utils';

@Component({
  selector: "ng-pop-carousel-item",
  templateUrl: "./carousel-item.component.html",
  styleUrls: ["./carousel-item.component.css"]
})
export class NgPopCarouselItemComponent implements OnInit, ChildComponent,Activatable {
  constructor(public containerComp: NgPopCarouselComponent) {}
  isActive = false;
  @Output() onActivate: EventEmitter<this> = new EventEmitter();
  @Output() onDeactivate: EventEmitter<this> = new EventEmitter();
  commonActivate: () => void;
  commonDeactivate: () => void;
  activate() {
    this.commonActivate();
  }

  deactivate() {
    this.commonDeactivate();
  }
  ngOnInit() {
    this.containerComp.addChildComp(this);
  }
  ngOnDestroy() {
    this.containerComp.removeChildComp(this);
  }
}
applyMixins(NgPopCarouselItemComponent, [Activatable]);
