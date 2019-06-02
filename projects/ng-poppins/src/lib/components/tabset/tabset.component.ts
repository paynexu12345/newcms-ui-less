import { Component, OnInit, Input } from "@angular/core";
import { NgPopTabItemComponent } from "./tab-item/tab-item.component";
import { TabConfig, DEFAULT_TAB_CONFIG } from "./class";
import { NgPopTabFlagComponent } from "./tab-flag/tab-flag.component";
import { commonInitCfg, applyMixins } from "../comp-utils";
import { ContainerComponent } from '../base';

@Component({
  selector: "ng-pop-tabset",
  templateUrl: "./tabset.component.html",
  styleUrls: ["./tabset.component.css"]
})
export class NgPopTabsetComponent extends ContainerComponent<NgPopTabItemComponent>
  implements OnInit {
  constructor() {
    super();
  }
  childComps: NgPopTabItemComponent[] = [];
  flagComp: NgPopTabFlagComponent;
  rootCssClass = "ng-pop-tab";
  reservedCssClasses: string[] = [];
  config: TabConfig = DEFAULT_TAB_CONFIG;
  @Input("config")
  set _config(val) {
    commonInitCfg(this, val);
  }

  ngOnInit() {
    // setTimeout(() => {
    //   this.childComps[this.config.activeIndex].isActive = true;
    // }, 100);
  }
}
