import { Component, OnInit, Input } from "@angular/core";
import { NgPopHeaderNavItemComponent } from "./header-nav-item/header-nav-item.component";
import { DEFAULT_HEADER_NAV_CONFIG } from "./class";
import { commonInitCfg, applyMixins } from "../comp-utils";
import { HasConfig, ContainerComponent } from "../interfaces";

@Component({
  selector: "ng-pop-header-nav",
  templateUrl: "header-nav.component.html"
})
export class NgPopHeaderNavComponent
  implements OnInit, HasConfig, ContainerComponent<NgPopHeaderNavItemComponent> {
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
  addChildComp: (comp: NgPopHeaderNavItemComponent) => void;
  removeChildComp: (comp: NgPopHeaderNavItemComponent) => void;
  ngOnInit() {
    setTimeout(() => {
      this.childComps[this.config.activeIndex].activate();
    }, 100);
  }
}
applyMixins(NgPopHeaderNavComponent, [ContainerComponent]);
