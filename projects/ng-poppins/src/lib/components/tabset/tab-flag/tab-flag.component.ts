import { Component, OnInit } from "@angular/core";
import { ChildComponent } from "../../interfaces";
import { NgPopTabsetComponent } from "../tabset.component";

@Component({
  selector: "ng-pop-tab-flag",
  templateUrl: "./tab-flag.component.html",
  styleUrls: ["./tab-flag.component.css"]
})
export class NgPopTabFlagComponent implements OnInit, ChildComponent {
  constructor(public containerComp: NgPopTabsetComponent) {}
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
