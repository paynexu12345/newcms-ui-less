import { Component, Input, OnInit } from "@angular/core";
import { applyMixins, commonActivateOnInit, commonInitCfg } from "../comp-utils";
import { BaseConfigComponent, ContainerComponent } from "../interfaces";
import { DEFAULT_HEADER_NAV_CONFIG } from "./class";
import { NgPopHeaderNavItemComponent } from "./header-nav-item/header-nav-item.component";
@Component({
  selector: "ng-pop-header-nav",
  templateUrl: "header-nav.component.html"
})
export class NgPopHeaderNavComponent
  implements
    OnInit,
    BaseConfigComponent,
    ContainerComponent<NgPopHeaderNavItemComponent> {
  constructor() {}
  items: NgPopHeaderNavItemComponent[] = [];
  config = DEFAULT_HEADER_NAV_CONFIG;
  rootCssClass = "ng-pop-header-nav";
  reservedCssClasses: string[] = [];
  childComps: NgPopHeaderNavItemComponent[] = [];
  @Input("config")
  set _config(val) {
    commonInitCfg(this, val);
  }
  commonAddChildComp: (comp: NgPopHeaderNavItemComponent) => void;
  commonRemoveChildComp: (comp: NgPopHeaderNavItemComponent) => void;
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
applyMixins(NgPopHeaderNavComponent, [ContainerComponent]);
