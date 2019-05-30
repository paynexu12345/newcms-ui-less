import { Component, OnInit, Input } from "@angular/core";
import { ContainerComponent, HasConfig } from "../interfaces";
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
  implements OnInit, ContainerComponent<NgPopTabItemComponent>, HasConfig {
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
  addChildComp: (comp: NgPopTabItemComponent) => void;
  removeChildComp: (comp: NgPopTabItemComponent) => void;

  ngOnInit() {
    setTimeout(() => {
      this.childComps[this.config.activeIndex].activate();
    }, 100);
  }
}
applyMixins(NgPopTabsetComponent, [ContainerComponent]);
