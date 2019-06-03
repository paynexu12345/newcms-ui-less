import { Component, OnInit, OnDestroy } from "@angular/core";
import { NgPopTabsetComponent } from "../tabset.component";
import { SubComponent } from '../../base';

@Component({
  selector: "ng-pop-tab-flag",
  templateUrl: "./tab-flag.component.html",
  styleUrls: ["./tab-flag.component.css"]
})
export class NgPopTabFlagComponent extends SubComponent implements OnInit, OnDestroy {
  constructor(public containerComp: NgPopTabsetComponent) {
    super();
  }
  translateX = 0;
  width = 0;
  moveTo(x: number) {
    this.translateX = x;
  }

  setWidth(w: number) {
    this.width = w;
  }

  ngOnInit() {
    this.containerComp.flagComp = this;
  }

  ngOnDestroy() {
    this.containerComp.flagComp = null;
  }
}
