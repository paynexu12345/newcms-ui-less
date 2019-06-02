import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";
import { NgPopHeaderNavComponent } from "../header-nav.component";
import { HeaderNavItem, DEFAULT_HEADER_NAV_ITEM } from "../class";
import { ChildComponent } from '../../base';

@Component({
  selector: "ng-pop-header-nav-item",
  templateUrl: "./header-nav-item.component.html"
})
export class NgPopHeaderNavItemComponent extends ChildComponent implements OnInit {
  constructor(
    public containerComp: NgPopHeaderNavComponent
  ) {
    super();
  }
  item: HeaderNavItem = DEFAULT_HEADER_NAV_ITEM;
  ngOnInit() {
    this.containerComp.addChildComp(this);
  }
}
