import { Component, Input, OnInit } from "@angular/core";
import { commonActivateOnInit, commonInitCfg } from "../comp-utils";
import { DEFAULT_HEADER_NAV_CONFIG } from "./class";
import { NgPopHeaderNavItemComponent } from "./header-nav-item/header-nav-item.component";
import { ContainerComponent } from '../base';
@Component({
  selector: "ng-pop-header-nav",
  templateUrl: "header-nav.component.html"
})
export class NgPopHeaderNavComponent extends ContainerComponent<NgPopHeaderNavItemComponent>
  implements
  OnInit {
  childComps: any;
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
  addChildComp(comp: NgPopHeaderNavItemComponent) {
    this.commonAddChildComp(comp);
    this.childComps.forEach((_comp, i) => {
      if (_comp == comp) comp.item = this.config.items[i];
    });
  }
  removeChildComp(comp: NgPopHeaderNavItemComponent) {
    this.commonRemoveChildComp(comp);
  }
  ngOnInit() {
    commonActivateOnInit(this);
  }
}
