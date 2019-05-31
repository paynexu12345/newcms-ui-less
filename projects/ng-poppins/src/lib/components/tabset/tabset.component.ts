import { Component, OnInit, Input } from "@angular/core";
import { ContainerComponent, BaseConfigComponent } from "../interfaces";
import { NgPopTabItemComponent } from "./tab-item/tab-item.component";
import { TabConfig, DEFAULT_TAB_CONFIG } from "./class";
import { NgPopTabFlagComponent } from "./tab-flag/tab-flag.component";
import { commonInitCfg, applyMixins } from "../comp-utils";

@Component({
  selector: "ng-pop-tabset",
  templateUrl: "./tabset.component.html",
  styleUrls: ["./tabset.component.css"]
})
export class NgPopTabsetComponent
  implements OnInit, ContainerComponent<NgPopTabItemComponent>, BaseConfigComponent {
  constructor() {}
  childComps: NgPopTabItemComponent[] = [];
  flagComp: NgPopTabFlagComponent;
  rootCssClass = "ng-pop-tab";
  reservedCssClasses: string[] = [];
  config: TabConfig = DEFAULT_TAB_CONFIG;
  @Input("config")
  set _config(val) {
    commonInitCfg(this, val);
  }
  commonAddChildComp: (comp: NgPopTabItemComponent) => void;
  commonRemoveChildComp: (comp: NgPopTabItemComponent) => void;
  addChildComp(comp: NgPopTabItemComponent){
    this.commonAddChildComp(comp);
  };
  removeChildComp(comp: NgPopTabItemComponent){
    this.commonRemoveChildComp(comp);
  };

  ngOnInit() {
    setTimeout(() => {
      this.childComps[this.config.activeIndex].activate();
    }, 100);
  }
}
applyMixins(NgPopTabsetComponent, [ContainerComponent]);
