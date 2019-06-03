import { Component, Input, OnInit } from "@angular/core";
import { commonActivateOnInit, commonInitCfg } from "../comp-utils";
import { DEFAULT_HEADER_NAV_CONFIG } from "./class";
import { NgPopHeaderNavItemComponent } from "./header-nav-item/header-nav-item.component";
import { ContainerComponent } from "../base";
@Component({
  selector: "ng-pop-header-nav",
  templateUrl: "header-nav.component.html"
})
export class NgPopHeaderNavComponent
  extends ContainerComponent<NgPopHeaderNavItemComponent>
  implements OnInit {
  mainSubComps: any;
  constructor() {
    super();
  }
  items: NgPopHeaderNavItemComponent[] = [];
  config = DEFAULT_HEADER_NAV_CONFIG;
  rootCssClass = "ng-pop-header-nav";
  @Input("config")
  set _config(val) {
    commonInitCfg(this, val);
  }
  addMainSubComp(comp: NgPopHeaderNavItemComponent) {
    this.commonAddMainSubComp(comp);
  }
  removeMainSubComp(comp: NgPopHeaderNavItemComponent) {
    this.commonRemoveMainSubComp(comp);
  }
  ngOnInit() {
    commonActivateOnInit(this);
  }
}
