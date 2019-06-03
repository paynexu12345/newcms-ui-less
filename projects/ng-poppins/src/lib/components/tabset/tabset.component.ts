import { Component, OnInit, Input } from "@angular/core";
import { NgPopTabConfig, DEFAULT_TAB_CONFIG } from "./class";
import { NgPopTabFlagComponent } from "./tab-flag/tab-flag.component";
import { commonInitCfg } from "../comp-utils";
import { ContainerComponent } from '../base';
import { NgPopTabNavItemComponent } from './tab-nav-item/tab-nav-item.component';
import { NgPopTabContentItemComponent } from './tab-content-item/tab-content-item.component';

@Component({
  selector: "ng-pop-tabset",
  templateUrl: "./tabset.component.html",
  styleUrls: ["./tabset.component.css"]
})
export class NgPopTabsetComponent extends ContainerComponent<NgPopTabNavItemComponent>
  implements OnInit {
  constructor() {
    super();
  }
  mainSubComps: NgPopTabNavItemComponent[] = [];
  contentComps:NgPopTabContentItemComponent[] = [];
  flagComp: NgPopTabFlagComponent;
  rootCssClass = "ng-pop-tab";
  reservedCssClasses: string[] = [];
  config: NgPopTabConfig = DEFAULT_TAB_CONFIG;
  @Input("config")
  set _config(val) {
    commonInitCfg(this, val);
  }

  addContentComp(comp:NgPopTabContentItemComponent){
    this.contentComps.push(comp);
  }
  removeContentComp(comp){
    this.contentComps.forEach((_comp,i)=>{
      if(_comp == comp )
        this.contentComps.splice(i,1);
    })
  }

  ngOnInit() {
  }
}
