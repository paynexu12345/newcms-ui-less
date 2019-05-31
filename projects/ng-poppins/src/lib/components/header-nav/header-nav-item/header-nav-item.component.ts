import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";
import { NgPopHeaderNavComponent } from "../header-nav.component";
import { HeaderNavItem, DEFAULT_HEADER_NAV_ITEM } from "../class";
import { ChildComponent, Activatable } from "../../interfaces";
import { applyMixins } from "../../comp-utils";

@Component({
  selector: "ng-pop-header-nav-item",
  templateUrl: "./header-nav-item.component.html"
})
export class NgPopHeaderNavItemComponent
  implements OnInit, ChildComponent, Activatable {
  constructor(
    public containerComp: NgPopHeaderNavComponent,
    public router: Router
  ) {}
  item: HeaderNavItem = DEFAULT_HEADER_NAV_ITEM;
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
}
applyMixins(NgPopHeaderNavItemComponent, [ChildComponent, Activatable]);
